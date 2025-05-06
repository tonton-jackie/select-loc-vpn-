const chillCountries = [
  { name: "Hawaii", timezone: "Pacific/Honolulu" },
  { name: "New York", timezone: "America/New_York" },
  { name: "Tokyo", timezone: "Asia/Tokyo" },
  { name: "Sydney", timezone: "Australia/Sydney" },
  { name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires" },
  { name: "Moscow", timezone: "Europe/Moscow" },
  { name: "Vancouver", timezone: "America/Vancouver" },
  { name: "Londres", timezone: "Europe/London" },
  { name: "Sao Paulo", timezone: "America/Sao_Paulo" },
  { name: "Mumbai", timezone: "Asia/Kolkata" },
  { name: "Manille", timezone: "Asia/Manila" },
  { name: "Berlin", timezone: "Europe/Berlin" },
  { name: "Dubaï", timezone: "Asia/Dubai" },
  { name: "Le Cap", timezone: "Africa/Johannesburg" },
  { name: "Los Angeles", timezone: "America/Los_Angeles" },
  { name: "Toronto", timezone: "America/Toronto" },
  { name: "Séoul", timezone: "Asia/Seoul" },
  { name: "Singapour", timezone: "Asia/Singapore" },
  { name: "Nairobi", timezone: "Africa/Nairobi" },
  { name: "Oslo", timezone: "Europe/Oslo" },
  { name: "Albania", timezone: "Europe/Tirane" },
  { name: "Algeria", timezone: "Africa/Algiers" },
  { name: "Andorra", timezone: "Europe/Andorra" },
  { name: "Argentina", timezone: "America/Argentina/Buenos_Aires" },
  { name: "Armenia", timezone: "Asia/Yerevan" },
  { name: "Australia (Melbourne)", timezone: "Australia/Melbourne" },
  { name: "Australia (Perth)", timezone: "Australia/Perth" },
  { name: "Austria", timezone: "Europe/Vienna" },
  { name: "Bahamas", timezone: "America/Nassau" },
  { name: "Belgium", timezone: "Europe/Brussels" },
  { name: "Bangladesh", timezone: "Asia/Dhaka" },
  { name: "Brazil", timezone: "America/Sao_Paulo" },
  { name: "Bulgaria", timezone: "Europe/Sofia" },
  { name: "Canada (Montreal)", timezone: "America/Montreal" },
  { name: "Canada (Ontario)", timezone: "America/Toronto" },
  { name: "Canada (Toronto)", timezone: "America/Toronto" },
  { name: "Canada (Vancouver)", timezone: "America/Vancouver" },
  { name: "Cambodia", timezone: "Asia/Phnom_Penh" },
  { name: "China", timezone: "Asia/Shanghai" },
  { name: "Cyprus", timezone: "Asia/Nicosia" },
  { name: "Czech Republic", timezone: "Europe/Prague" },
  { name: "Germany (Berlin)", timezone: "Europe/Berlin" },
  { name: "Denmark", timezone: "Europe/Copenhagen" },
  { name: "Egypt", timezone: "Africa/Cairo" },
  { name: "Estonia", timezone: "Europe/Tallinn" },
  { name: "Finland", timezone: "Europe/Helsinki" },
  { name: "France", timezone: "Europe/Paris" },
  { name: "Georgia", timezone: "Asia/Tbilisi" },
  { name: "Greece", timezone: "Europe/Athens" },
  { name: "Greenland", timezone: "America/Nuuk" },
  { name: "Hong Kong", timezone: "Asia/Hong_Kong" },
  { name: "Hungary", timezone: "Europe/Budapest" },
  { name: "Iceland", timezone: "Atlantic/Reykjavik" },
  { name: "India", timezone: "Asia/Kolkata" },
  { name: "Ireland", timezone: "Europe/Dublin" },
  { name: "Isle of Man", timezone: "Europe/Isle_of_Man" },
  { name: "Israel", timezone: "Asia/Jerusalem" },
  { name: "Italy", timezone: "Europe/Rome" },
  { name: "Japan", timezone: "Asia/Tokyo" },
  { name: "Kazakhstan", timezone: "Asia/Almaty" },
  { name: "Latvia", timezone: "Europe/Riga" },
  { name: "Liechtenstein", timezone: "Europe/Vaduz" },
  { name: "Lithuania", timezone: "Europe/Vilnius" },
  { name: "Luxembourg", timezone: "Europe/Luxembourg" },
  { name: "Macao", timezone: "Asia/Macau" },
  { name: "Macedonia", timezone: "Europe/Skopje" },
  { name: "Malta", timezone: "Europe/Malta" },
  { name: "Mexico", timezone: "America/Mexico_City" },
  { name: "Moldova", timezone: "Europe/Chisinau" },
  { name: "Monaco", timezone: "Europe/Monaco" },
  { name: "Mongolia", timezone: "Asia/Ulaanbaatar" },
  { name: "Montenegro", timezone: "Europe/Podgorica" },
  { name: "Morocco", timezone: "Africa/Casablanca" },
  { name: "Netherlands", timezone: "Europe/Amsterdam" },
  { name: "New Zealand", timezone: "Pacific/Auckland" },
  { name: "Nigeria", timezone: "Africa/Lagos" },
  { name: "Norway", timezone: "Europe/Oslo" },
  { name: "Panama", timezone: "America/Panama" },
  { name: "Philippines", timezone: "Asia/Manila" },
  { name: "Poland", timezone: "Europe/Warsaw" },
  { name: "Portugal", timezone: "Europe/Lisbon" },
  { name: "Qatar", timezone: "Asia/Qatar" },
  { name: "Romania", timezone: "Europe/Bucharest" },
  { name: "Saudi Arabia", timezone: "Asia/Riyadh" },
  { name: "Serbia", timezone: "Europe/Belgrade" },
  { name: "Singapore", timezone: "Asia/Singapore" },
  { name: "Slovakia", timezone: "Europe/Bratislava" },
  { name: "South Africa", timezone: "Africa/Johannesburg" },
  { name: "Spain", timezone: "Europe/Madrid" },
  { name: "Sri Lanka", timezone: "Asia/Colombo" },
  { name: "Sweden", timezone: "Europe/Stockholm" },
  { name: "Switzerland", timezone: "Europe/Zurich" },
  { name: "Taiwan", timezone: "Asia/Taipei" },
  { name: "Turkey", timezone: "Europe/Istanbul" },
  { name: "United Kingdom (London)", timezone: "Europe/London" },
  { name: "Ukraine", timezone: "Europe/Kiev" },
  { name: "United Arab Emirates", timezone: "Asia/Dubai" },
  { name: "United States (Atlanta)", timezone: "America/New_York" },
  { name: "United States (California)", timezone: "America/Los_Angeles" },
  { name: "United States (Chicago)", timezone: "America/Chicago" },
  { name: "United States (Denver)", timezone: "America/Denver" },
  { name: "United States (Florida)", timezone: "America/New_York" },
  { name: "United States (Houston)", timezone: "America/Chicago" },
  { name: "United States (Las Vegas)", timezone: "America/Los_Angeles" },
  { name: "United States (New York)", timezone: "America/New_York" },
  { name: "United States (Seattle)", timezone: "America/Los_Angeles" },
  { name: "United States (Silicon Valley)", timezone: "America/Los_Angeles" },
  { name: "United States (Texas)", timezone: "America/Chicago" },
  { name: "United States (Washington DC)", timezone: "America/New_York" },
  { name: "United States (West)", timezone: "America/Los_Angeles" },
  { name: "Uzbekistan", timezone: "Asia/Tashkent" }
];

function isValidTimeZone(timezone) {
  try {
    new Intl.DateTimeFormat('fr-FR', { timeZone: timezone });
    return true;
  } catch (e) {
    console.error(`Erreur : le fuseau horaire '${timezone}' n'est pas valide.`);
    return false;
  }
}

function getLocalHour(timezone) {
  const now = new Date();
  if (!isValidTimeZone(timezone)) {
    return null;
  }

  const timeInZone = new Intl.DateTimeFormat("fr-FR", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(now);

  const [hour, minute] = timeInZone.split(":");
  return { hour: parseInt(hour), minute: parseInt(minute) };
}

document.addEventListener('DOMContentLoaded', function () {
  function getChillCountry() {
    const chillOptions = chillCountries.filter((country) => {
      const { hour } = getLocalHour(country.timezone);
      return hour >= 0 && hour < 8;
    });

    if (chillOptions.length === 0) {
      document.getElementById("result").innerText = "😔 Aucun pays chill trouvé en ce moment.";
    } else {
      const random = chillOptions[Math.floor(Math.random() * chillOptions.length)];
      const { hour, minute } = getLocalHour(random.timezone);
      document.getElementById("result").innerText = `🌴 Un pays chill : ${random.name}, heure locale : ${hour}:${minute < 10 ? "0" + minute : minute}`;
    }
    
  }

  const button = document.getElementById("getChillButton");
  if (button) {
    button.addEventListener("click", getChillCountry);
  } else {
    console.error("Le bouton 'getChillButton' n'a pas été trouvé !");
  }
});

// Fonction pour afficher l'heure actuelle en France
function updateCurrentTime() {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Paris',
    hour12: false
  };
  const time = new Intl.DateTimeFormat('fr-FR', options).format(now);
  document.getElementById("currentTime").textContent = time;
}

// Mise à jour de l'heure toutes les secondes
setInterval(updateCurrentTime, 1000);
updateCurrentTime(); // Initialiser l'heure dès le départ