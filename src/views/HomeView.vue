<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useFirestore } from 'vuefire';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const db = useFirestore(); // Initialize Firestore

const showAlert = ref(false);
const alertMessage = ref("");

const currentStep = ref(1);

const steps = [
  { id: 1, title: "Welcome" },
  { id: 2, title: "Personal Details" },
  { id: 3, title: "Golf Details" },
  { id: 4, title: "Registration Payment" }
];

const countriesList = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
  "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
  "Czech Republic", "DR Congo (Congo-Kinshasa)", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
  "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
  "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
  "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const clubOptions = [
  "Entebbe Club",
  "Garuga Golf Club, Kihihi",
  "Jinja Club",
  "Kabale Sports Club",
  "Kilembe Mines Golf Club",
  "Kinyara Golf Club",
  "Lake Victoria Serena Golf Resort & Spa",
  "Lira Sports & Golf Club",
  "Lugazi Hills Golf & Country Club",
  "Mary Louise Simpkins Memorial Golf Club, Namulonge",
  "Masindi Golf Club",
  "Mbale Sports Club",
  "Mbarara Sports Club",
  "Palm Valley Golf & Country Club",
  "Soroti Golf Club",
  "Toro Club",
  "Tororo Club",
  "Uganda Golf Club",
  "West Nile Club",
  "Other"
];

const events = [
  {
    name: "Ladies Open",
    subsidiaries: [
      { name: "LADIES SILVER EVENT", price: "300,000 UGX" },
      { name: "LADIES BRONZE EVENT", price: "200,000 UGX" },
      { name: "SUBSIDIARY (MEN) EVENT", price: "100,000 UGX" }
    ]
  },
  {
    name: "Seniors Open",
    subsidiaries: [
      { name: "SENIORS OPEN", price: "200,000 UGX" },
    ]
  },
  {
    name: "Amateur Open",
    subsidiaries: [
      { name: "AMATEUR GROSS EVENT", price: "400,000 UGX" },
      { name: "SUBSIDIARY GROUP C", price: "100,000 UGX" },
      { name: "SUBSIDIARY GROUP B", price: "100,000 UGX" },
      { name: "SUBSIDIARY TEST", price: "1,000 UGX" }
    ]
  },
  {
    name: "Professional Open",
    subsidiaries: [
      { name: "PRO-AM", price: "100,000 UGX" },
      { name: "PROFESSIONAL EVENT USD", price: "USD 130" },
      { name: "PROFESSIONAL EVENT UGX", price: "UGX 450,000" },
      { name: "SUBSIDIARY EVENT", price: "100,000 UGX" }
    ]
  }
];

const firstName = ref("");
const otherName = ref("");
const lastName = ref("");
const email = ref("");
const country = ref("Uganda");
const phone = ref("");
const club = ref("");
const event = ref(events[1].name); // Default to "Seniors Open"
const isOtherSelected = computed(() => club.value === 'Other');
const paymentConfirmation = ref(true);
const confirmCheck = ref(true);
const isSubmitting = ref(false);
const selectedSubsidiary = ref("");

const selectedEventObj = computed(() =>
  events.find(e => e.name === event.value)
);

watch(event, () => {
  selectedSubsidiary.value = "";
});

// Navigation
const nextStep = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const progressPercentage = computed(() => {
  return ((currentStep.value - 1) / (steps.length - 1)) * 100;
});

function validateStep(step: number): boolean {
  if (step === 2) {
    if (!firstName.value || !lastName.value || !email.value || !country.value || !phone.value) {
      alertMessage.value = "Please fill in all fields marked with * in Personal Details .i.e First Name, Last Name, Email, Country, and Phone.";
      showAlert.value = true;
      return false;
    }
  }
  if (step === 3) {
    if (!club.value || !event.value) {
      alertMessage.value = "Please select your club and event (fields marked with *).";
      showAlert.value = true;
      return false;
    }

    // Add this validation for subsidiaries
    const selectedEvent = events.find(e => e.name === event.value);
    if (selectedEvent && selectedEvent.subsidiaries.length > 0 && !selectedSubsidiary.value) {
      alertMessage.value = "Please select a subsidiary for this event.";
      showAlert.value = true;
      return false;
    }
  }
  if (step === 4) {
    if (!confirmCheck.value) {
      alertMessage.value = "Please confirm your information (checkbox marked with *).";
      showAlert.value = true;
      return false;
    }
  }
  showAlert.value = false;
  return true;
}


function resetForm() {
  currentStep.value = 1;
  firstName.value = "";
  otherName.value = "";
  lastName.value = "";
  email.value = "";
  country.value = "Uganda";
  phone.value = "";
  club.value = "";
  event.value = "";
  confirmCheck.value = false;
}

function tryNextStep() {
  if (validateStep(currentStep.value)) {
    nextStep();
  }
}

function tryPrevStep() {
  prevStep();
}

// Single makePayment function that uses current form values
// Replace your existing makePayment and handleSubmit functions with this:

function getEventAmount() {
  const selectedEvent = events.find(e => e.name === event.value);
  let amount = 0;
  let subsidiaryPrice = "";
  let currency = "UGX";

  if (selectedEvent && selectedEvent.subsidiaries.length && selectedSubsidiary.value) {
    const sub = selectedEvent.subsidiaries.find(s => s.name === selectedSubsidiary.value);
    if (sub && sub.price) {
      // Detect currency
      if (sub.price.includes("USD")) {
        currency = "USD";
        amount = parseInt(sub.price.replace(/[^0-9]/g, ''));
      } else {
        currency = "UGX";
        amount = parseInt(sub.price.replace(/[^0-9]/g, ''));
      }
      subsidiaryPrice = sub.price;
    }
  } else if (selectedEvent && selectedEvent.subsidiaries.length === 0) {
    // Handle events without subsidiaries - you may want to set a default price
    amount = 0; // Set appropriate default amount
  }

  return { amount, subsidiaryPrice, currency };
}

function saveToFirebase(paymentAmount?: number, paymentCurrency?: string) {
  const { amount, subsidiaryPrice, currency } = getEventAmount();
  const finalAmount = paymentAmount || amount;
  const finalCurrency = paymentCurrency || currency;

  const registrationData = {
    firstName: firstName.value,
    otherName: otherName.value,
    lastName: lastName.value,
    email: email.value,
    country: country.value,
    phone: phone.value,
    club: club.value,
    event: event.value,
    subsidiary: selectedSubsidiary.value,
    subsidiaryPrice: subsidiaryPrice,
    amount: finalAmount,
    currency: finalCurrency,
    paymentConfirmation: paymentConfirmation.value,
    registrationStatus: true,
    paymentMethod: "flutterwave",
    timestamp: serverTimestamp()
  };

  return addDoc(collection(db, "registrations"), registrationData);
}

function handleSubmit() {
  if (!validateStep(4)) return;
  isSubmitting.value = true;

  saveToFirebase()
    .then(() => {
      // alert("Registration submitted successfully!");
      isSubmitting.value = false;
      resetForm();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Registration failed. Please try again.");
      isSubmitting.value = false;
    });
}

function makePayment(amount: number, currency: string) {
  isSubmitting.value = true;
  saveToFirebase(amount, currency)
    .then(() => {
      alert("Registration and payment submitted successfully!");
      isSubmitting.value = false;
      resetForm();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Registration failed. Please try again.");
      isSubmitting.value = false;
    });
}

function handleFlutterwavePayment() {
  const { amount, currency } = getEventAmount();

  if (amount <= 0) {
    alert("Invalid event or subsidiary selected. Please select a valid event and subsidiary.");
    return;
  }

  FlutterwaveCheckout({
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: `tx-${Date.now()}`,
    amount: amount,
    currency: currency,
    payment_options: currency === "USD" ? "card" : "card, ussd, banktransfer, mobilemoneyuganda",
    customer: {
      name: `${firstName.value} ${otherName.value || ""} ${lastName.value}`,
      email: email.value,
      phone_number: phone.value
    },
    callback: (response: any) => {
      if (response.status === "successful") {
        makePayment(amount, currency);
      } else {
        alert("Payment failed. Please try again.");
      }
    },
    onclose: () => {
      console.log("Payment closed");
    }
  });
}

function FlutterwaveCheckout(options: {
  public_key: string;
  tx_ref: string;
  amount: number;
  currency: string;
  payment_options: string;
  customer: { name: string; email: string; phone_number: string };
  callback: (response: any) => void;
  onclose: () => void;
}) {
  // Check if Flutterwave inline script is loaded
  if (typeof window !== "undefined" && (window as any).FlutterwaveCheckout) {
    (window as any).FlutterwaveCheckout({
      ...options,
      callback: (response: any) => {
        options.callback(response);
      },
      onclose: () => {
        options.onclose();
      }
    });
  } else {
    alert("Flutterwave payment library not loaded. Please try again later.");
    options.onclose();
  }
}
</script>

<template>
  <main class="bg-light grid w-100 px-4 py-5">
    <div class="d-flex justify-content-center align-items-center mb-3">
      <img src="/images/tournmentphoto.png" alt="tournamnet image" loading="lazy" style="width: 250px;" />
    </div>
    <!-- Step Content -->
    <div class="bg-white rounded-4 shadow p-4 w-100" style="max-width: 600px;">
      <form>
        <!-- Stepper Progress Bar -->
        <div class="w-100 mb-4">
          <div class="progress" style="height: 10px;">
            <div class="progress-bar bg-success" :style="{ width: progressPercentage + '%' }"></div>
          </div>
        </div>
        <div v-if="currentStep === 1">
          <h4>Uganda Golf Union</h4>
          <p>Welcome to our golf registration form. Click next to get started.</p>
          <div class="d-flex justify-content-between my-3">
            <button type="button" class="btn btn-success w-100" @click="nextStep">Next</button>
          </div>
          <div class="d-flex gap-1 mt-2">
            <img src="/images/golfopen.jpg" alt="Tournament Photo" style="width: 50%; height: 10%; object-fit: cover;"
              class="flex-fill" />
          </div>
        </div>

        <div v-if="currentStep === 2">
          <h4>Personal Details</h4>
          <div class="row">
            <div class="col-md-6">
              <div>
                <label class="form-label mt-1" for="firstName">First Name<span class="text-danger">*</span></label>
                <input id="firstName" type="text" class="form-control" v-model="firstName" />
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <label class="form-label mt-1" for="lastName">Last Name<span class="text-danger">*</span></label>
                <input id="lastName" type="text" class="form-control" v-model="lastName" />
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <label class="form-label mt-1" for="email">Email<span class="text-danger">*</span></label>
                <input id="email" type="email" class="form-control" v-model="email" />
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <label class="form-label mt-1" for="country">Country<span class="text-danger">*</span></label>
                <select v-model="country" class="form-select">
                  <option :value="null">Select a country...</option>
                  <option v-for="name in countriesList" :key="name" :value="name">
                    {{ name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-12">
              <div>
                <label class="form-label mt-1" for="tel">Phone<span class="text-danger">*</span></label>
                <input type="tel" id="tel" class="form-control" v-model="phone" />
              </div>
            </div>
          </div>
          <div v-if="showAlert" class="alert alert-danger mt-3" role="alert">
            {{ alertMessage }}
          </div>
          <!--stepper-->
          <div class="d-flex gap-2 mt-3">
            <button type="button" class="btn btn-secondary flex-fill" @click="tryPrevStep">PREV</button>
            <button type="button" class="btn btn-success flex-fill" @click="tryNextStep">Next</button>
          </div>
        </div>

        <div v-if="currentStep === 3">
          <h4>Select Golf Club and Event</h4>
          <div class="mb-3">
            <label class="form-label" for="club">Select Your Club <span class="text-danger">*</span></label>
            <select id="club" class="form-select" v-model="club">
              <option value>Select a club...</option>
              <option v-for="option in clubOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>

          <!-- Show only when "Other" is selected -->
          <div v-if="isOtherSelected" class="mb-3">
            <label class="form-label" for="otherClub">Enter Club Name</label>
            <input id="otherClub" type="text" class="form-control" v-model="club" placeholder="Enter your club name" />
          </div>

          <!-- filepath: /home/user/uganda-golf/src/views/HomeView.vue -->
          <div class="mb-2">
            <label for="event" class="form-label">Choose Your Open<span class="text-danger">*</span></label>
            <select id="event" class="form-select" v-model="event">
              <option value>Select an opening...</option>
              <option v-for="option in events" :key="option.name" :value="option.name">
                {{ option.name }}
              </option>
            </select>
          </div>

          <!-- Subsidiary selection, only if event has subsidiaries -->
          <div v-if="selectedEventObj && selectedEventObj.subsidiaries.length" class="mb-2">
            <label for="subsidiary" class="form-label">Select Your Event</label>
            <select id="subsidiary" class="form-select" v-model="selectedSubsidiary">
              <option value>Select event...</option>
              <option v-for="sub in selectedEventObj.subsidiaries" :key="sub.name" :value="sub.name">
                {{ sub.name }} ({{ sub.price }})
              </option>
            </select>
          </div>
          <div v-if="showAlert" class="alert alert-danger mt-3" role="alert">
            {{ alertMessage }}
          </div>
          <div class="d-flex gap-2 mt-3">
            <button type="button" class="btn btn-secondary flex-fill" @click="tryPrevStep">PREV</button>
            <button type="button" class="btn btn-success flex-fill" @click="tryNextStep">Next</button>
          </div>
        </div>

        <div v-if="currentStep === 4">
          <h4>Payment</h4>
          <div class="mb-2">
            <div class="alert alert-success mt-3">
              Hello <strong>{{ firstName }} {{ lastName }}</strong>! This is the event you are
              registering for:
              <strong>{{ event }}</strong>
              <template v-if="selectedEventObj && selectedEventObj.subsidiaries.length">
                <span v-if="selectedSubsidiary">
                  at a cost of
                  <strong>
                    {{
                      selectedEventObj.subsidiaries.find(s => s.name === selectedSubsidiary)?.price || 'N/A'
                    }}
                  </strong>
                  for
                  <strong>
                    {{
                      selectedEventObj.subsidiaries.find(s => s.name === selectedSubsidiary)?.name || 'N/A'
                    }}.
                  </strong>
                </span>
                <span v-else>
                  <strong>Please select a subsidiary to see the price.</strong>
                </span>
              </template>
              <template v-else>
                <strong>No price available for this event.</strong>
              </template>
              Click the "Confirm Information" checkbox below to proceed with the payment.
            </div>
          </div>
          <div class="mb-2">
            <div class="form-check">
              <input type="checkbox" id="confirmCheck" v-model="confirmCheck" class="form-check-input" />
              <label for="confirmCheck" class="form-check-label">Confirm Information<span
                  class="text-danger">*</span></label>
            </div>
          </div>
          <div v-if="showAlert" class="alert alert-danger mt-3" role="alert">
            {{ alertMessage }}
          </div>
          <!-- Navigation Buttons -->
          <div class="d-flex gap-2 mt-4">
            <button type="button" class="btn btn-secondary flex-fill" @click="tryPrevStep">PREV</button>
            <button type="button" class="btn btn-success flex-fill" :disabled="isSubmitting || !confirmCheck"
              @click="handleFlutterwavePayment">
              <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status"
                aria-hidden="true"></span>
              PAY NOW</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

label {
  font-size: 1rem;
}

button {
  text-transform: uppercase;
  font-size: 700;
}
</style>
