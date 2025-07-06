<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
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
  "Aberdare Country Club",
  "Air Force Golf Club - Eastleigh",
  "Arusha Gymkhana Club",
  "Borrowale Brooke Country Club",
  "Cathedral Peak Golf Club",
  "Chapman Golf Club",
  "Chibuluma Golf Club",
  "Country Club Johannesburg",
  "Dar-es-salaam Gymkhana Golf Club",
  "Eldoret Golf Club",
  "Entebbe Club",
  "Fairmont Mount Kenya Safari Club",
  "Falcon Golf Club",
  "Garuga Golf Club, Kihihi",
  "Gilgil Golf Club",
  "Golf Park Golf Club",
  "Gweru Golf Club",
  "Hippo Valley Country Club",
  "IBB International Golf & Country Club",
  "Jinja Club",
  "Kabale Sports Club",
  "Kakamega Golf Club",
  "Karen Golf & Country Club",
  "Kenya Railways Golf Club",
  "Kiambu Golf Club",
  "Kilembe Mines Golf Club",
  "Kilimanjaro Golf Club",
  "Kingswood Golf Estate",
  "Kinyara Golf Club",
  "Kisii Sports Club",
  "Kitale Golf Club",
  "Lake Victoria Serena Golf Resort & Spa",
  "Lilongwe Golf Club",
  "Limuru Country Club",
  "Lira Sports & Golf Club",
  "Lugalo Golf Club",
  "Lugazi Hills Golf & Country Club",
  "Lusaka Golf Club",
  "Machakos Golf Club",
  "Makuyu Golf Club",
  "Malindi Golf Club",
  "Mary Louise Simpkins Memorial Golf Club, Namulonge",
  "Masindi Golf Club",
  "Mbale Sports Club",
  "Mbarara Sports Club",
  "Miccom Golf & Country Club",
  "Molo Highlands Golf Course",
  "Mombasa Golf Club",
  "Morogoro Gymkhana Club",
  "Mumias Golf Club",
  "Muthaiga Golf Club",
  "Nakuru Golf Club",
  "Nandi Bears Golf Club",
  "Nanyuki Golf Club",
  "Ndumberi Golf Club",
  "Njoro Country Club",
  "Nkana Golf Club",
  "Nyahururu Golf Club",
  "Nyali Golf & Country Club",
  "Nyanza Golf Club",
  "Nyeri Golf Club",
  "OLGC",
  "Orapa Golf Club",
  "Palm Valley Golf & Country Club",
  "Pretoria Country Club",
  "Rayfield Golf Club",
  "Royal Harare Golf Club",
  "Royal Nairobi Golf Club",
  "Ruiru Golf Club",
  "Shell Golf Club",
  "Sigona Golf Club",
  "Soroti Golf Club",
  "Soweto Country Club",
  "Terrawood Golf & Country Club",
  "Thika Sports Club",
  "Toro Club",
  "Tororo Club",
  "Uganda Golf Club",
  "Vet Lab Golf Club",
  "Vipingo Ridge Golf Club",
  "West Nile Club",
  "Windsor Golf & Country Club",
  "Wingate Golf Club",
  "Yaoundé Golf Club",
  "Other"
];

const events = [
  { name: "Ladies Open", price: "100,000 UGX" },
  { name: "Seniors Open", price: "250,000 UGX" },
  { name: "Amateur Open", price: "50,000 UGX" },
  { name: "Professional Open", price: "250,000 UGX" }
];

const firstName = ref("");
const otherName = ref("");
const lastName = ref("");
const email = ref("");
const country = ref("Uganda");
const phone = ref("");
const club = ref('Aberdare Country Club');
const event = ref(events[1].name); // Default to "Seniors Open"
const isOtherSelected = computed(() => club.value === 'Other');
const paymentConfirmation = ref(true);
const confirmCheck = ref(false);
const isSubmitting = ref(false);

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
  return ((currentStep.value + 1) / (steps.length + 1)) * 100;
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

function handleSubmit() {
  if (!validateStep(4)) return;
  isSubmitting.value = true;
  setTimeout(() => {
    alert("Registration submitted successfully!");
    isSubmitting.value = false;
    resetForm();
  }, 2000);
}

function resetForm() {
  currentStep.value = 1;
  firstName.value = "";
  otherName.value = "";
  lastName.value = "";
  email.value = "";
  country.value = "Uganda";
  phone.value = "";
  club.value = 'Aberdare Country Club';
  event.value = "Seniors Open";
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
function makePayment(amount: number) {
  if (!validateStep(4)) return;
  isSubmitting.value = true;

  const registrationData = {
    firstName: firstName.value,
    otherName: otherName.value,
    lastName: lastName.value,
    email: email.value,
    country: country.value,
    phone: phone.value,
    club: club.value,
    event: event.value,
    amount: amount,
    paymentConfirmation: paymentConfirmation.value,
    registrationStatus: true,
    timestamp: serverTimestamp()
  };

  addDoc(collection(db, "registrations"), registrationData)
    .then(() => {
      alert("Registration submitted successfully!");
      isSubmitting.value = false;
      resetForm();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      isSubmitting.value = false;
    });
}

function FlutterwaveCheckout(options: {
  public_key: string;
  tx_ref: string;
  amount: number;
  currency: string;
  payment_options: string;
  customer: { name: string; email: string; phone_number: string; };
  callback: (response: any) => void;
  onclose: () => void;
}) {
  if (typeof window !== "undefined" && (window as any).FlutterwaveCheckout) {
    (window as any).FlutterwaveCheckout({
      public_key: options.public_key,
      tx_ref: options.tx_ref,
      amount: options.amount,
      currency: options.currency,
      payment_options: options.payment_options,
      customer: options.customer,
      callback: options.callback,
      onclose: options.onclose,
      customizations: {
        title: "Uganda Golf Union",
        description: "Golf Registration Payment",
        logo: "https://golf-uganda.com/wp-content/uploads/2023/07/UGU-Logo-Converted.png"
      }
    });
  } else {
    alert("Payment service unavailable. Please try again later.");
    options.onclose();
  }
}

function handleFlutterwavePayment() {
  const selectedEvent = events.find(e => e.name === event.value);
  const amount = selectedEvent ? parseInt(selectedEvent.price.replace(/[^0-9]/g, '')) : 0;

  if (amount <= 0) {
    alert("Invalid event selected. Please select a valid event.");
    return;
  }

  FlutterwaveCheckout({
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: `tx-${Date.now()}`,
    amount: amount,
    currency: "UGX",
    payment_options: "card, ussd, banktransfer, mobilemoneyuganda",
    customer: {
      name: `${firstName.value} ${otherName.value || ""} ${lastName.value}`,
      email: email.value,
      phone_number: phone.value
    },
    callback: (response: any) => {
      if (response.status === "successful") {
        makePayment(amount);
      } else {
        alert("Payment failed. Please try again.");
      }
    },
    onclose: () => {
      console.log("Payment closed");
    }
  });
}
</script>

<template>
  <main class="bg-light grid w-100 px-4 py-5">
    <!-- Step Content -->
    <div class="bg-white rounded-4 shadow p-4 w-100" style="max-width: 600px;">
      <form @submit.prevent="handleSubmit">
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
                <label class="form-label" for="firstName">First Name<span class="text-danger">*</span></label>
                <input id="firstName" type="text" class="form-control" v-model="firstName" />
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <label class="form-label" for="otherName">Other Name</label>
                <input id="otherName" type="text" class="form-control" v-model="otherName" />
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
            <div class="col-md-6">
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
            <label class="form-label" for="club">Club <span class="text-danger">*</span></label>
            <select id="club" class="form-select" v-model="club">
              <option disabled value="">Select a club...</option>
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

          <div class="mb-2">
            <label for="event" class="form-label">Event<span class="text-danger">*</span></label>
            <select id="event" class="form-select" v-model="event">
              <option :value="null">Select an event...</option>
              <option v-for="option in events" :key="option.name" :value="option.name">
                {{ option.name }} ({{ option.price }})
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
          <!--Confirm email and name-->
          <p class="mb-3">Please confirm your email and name before proceeding to payment.</p>
          <div class="mb-2">
            <label for="confirmEmail" class="form-label">Email</label>
            <input type="email" id="confirmEmail" class="form-control" v-model="email" readonly />
          </div>
          <div class="mb-2">
            <label for="confirmNumber" class="form-label">Phone</label>
            <input type="text" id="confirmNumber" class="form-control" v-model="phone" readonly />
          </div>
          <div class="mb-2">
            <div class="alert alert-success mt-3">
              Hello <strong>{{ firstName }} {{ otherName || "" }} {{ lastName }}</strong>! This is the event you are
              registering for:
              <strong>{{ event }}</strong> at a cost of <strong>{{events.find(e => e.name === event)?.price}}</strong>.
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
            <button type="submit" class="btn btn-success flex-fill" :disabled="isSubmitting"
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
