// Area and Amenity names (customize as needed)
const AREA_NAMES = [
  "Near Andheri station", "Azad Nagar", "Versoa", "DN Nagar", "Other Areas"
];
const AMENITY_NAMES = [
  "WiFi", "Laundry", "AC", "Food", "Parking", "Security", "Fridge", "Gym"
];
const AMENITY_ICONS = [
  "📶", "🧺", "❄️", "🍽️", "🚗", "🔒", "🧊", "🏋️"
];
const AREA_ICONS = [
  "🚉", "🏙️", "🏖️", "🏢", "📍"
];

// 20 Example PG Listings (simulate DB)
const pgListings = [
  { name: "PG 1", rent: 10000, distance: 5, area: 1, gender: "Unisex", amenities: [1,3,4,5,6], bedsPerRoom: 4, note: "Metro station ke paas hai, office jane ke liye perfect! Weekend mein Andheri West market explore karo, street food bahut mast hai. Local tip: Station ke paas wala chaiwala best chai deta hai. College ke baad internship ke liye bhi convenient location hai. Roommates ke saath movie nights ke liye nearby mall hai.", contributor: "Rahul Sharma", branch: "CS", year: "3rd Year", address: "Near Andheri Station, Mumbai" },
  { name: "PG 2", rent: 9000, distance: 4, area: 2, gender: "Male", amenities: [2,3,5,7], bedsPerRoom: 3, note: "Shanti wala area hai, padhai ke liye perfect! Azad Nagar mein best momos milte hain, try karna. Weekend mein nearby park mein cricket khel sakte ho. College projects ke liye group study room available hai. Local dhaba mein budget friendly food milta hai. Roommates ke saath late night coding sessions ke liye ideal.", contributor: "Amit Patel", branch: "IT", year: "4th Year", address: "Azad Nagar, Andheri West" },
  { name: "PG 3", rent: 12000, distance: 6, area: 3, gender: "Female", amenities: [1,4,6,8], bedsPerRoom: 2, note: "Versova beach walking distance pe hai! Weekend mein beach pe jao, sunset dekhne ka mazza hi kuch aur hai. Local cafe mein coffee try karo. College ke baad stress relief ke liye perfect location. Roommates ke saath beach photography sessions karo. Local market mein ethnic wear shopping ke liye best hai.", contributor: "Priya Singh", branch: "ENTC", year: "2nd Year", address: "Versova Beach Road, Mumbai" },
  { name: "PG 4", rent: 8000, distance: 3, area: 4, gender: "Unisex", amenities: [2,5,6,7], bedsPerRoom: 5, note: "Budget friendly hai but thoda crowded. DN Nagar mein best street shopping hai, bargaining sikho! Metro station nearby hai. College ke baad part-time job ke liye convenient. Roommates ke saath potluck dinners organize karo. Local library mein study material available hai.", contributor: "Vikram Kumar", branch: "MCA", year: "1st Year", address: "DN Nagar, Andheri East" },
  { name: "PG 5", rent: 11000, distance: 7, area: 5, gender: "Male", amenities: [1,3,4,8], bedsPerRoom: 2, note: "Students ke liye perfect hai, basic amenities hai. Weekend mein local market explore karo, fresh vegetables milte hain. Auto stand nearby hai. College ke baad gym ke liye nearby fitness center hai. Roommates ke saath weekend trips plan karo. Local cyber cafe mein printing facilities available hai.", contributor: "Suresh Reddy", branch: "CS", year: "3rd Year", address: "Other Areas, Mumbai" },
  { name: "PG 6", rent: 9500, distance: 2, area: 1, gender: "Female", amenities: [2,4,5,7], bedsPerRoom: 3, note: "Girls ke liye safe hai, market ke paas hai. Andheri station ke paas best street food hai, try karna! Local tip: Station ke paas wala juice center fresh juice deta hai. College ke baad shopping ke liye perfect location. Roommates ke saath beauty parlour visits karo. Local park mein morning yoga sessions karo.", contributor: "Neha Gupta", branch: "IT", year: "4th Year", address: "Near Andheri Station, Mumbai" },
  { name: "PG 7", rent: 10500, distance: 5, area: 2, gender: "Unisex", amenities: [1,2,3,6], bedsPerRoom: 4, note: "Clean and well maintained hai. Azad Nagar mein best chaat milte hain, weekend mein try karo! Local park mein morning walk karo. College ke baad networking events ke liye nearby cafes perfect hai. Roommates ke saath board games ke liye common area hai. Local bookshop mein academic books available hai.", contributor: "Rajesh Verma", branch: "ENTC", year: "2nd Year", address: "Azad Nagar, Andheri West" },
  { name: "PG 8", rent: 8500, distance: 4, area: 3, gender: "Male", amenities: [3,5,7,8], bedsPerRoom: 6, note: "Budget friendly hai, basic facilities hai. Versova mein best seafood milte hain, try karna! Beach nearby hai weekend ke liye. College ke baad beach volleyball khel sakte ho. Roommates ke saath bonfire nights organize karo. Local fishing spot nearby hai, weekend activity ke liye.", contributor: "Manoj Tiwari", branch: "MCA", year: "1st Year", address: "Versova Beach Road, Mumbai" },
  { name: "PG 9", rent: 11500, distance: 6, area: 4, gender: "Female", amenities: [1,4,6,7], bedsPerRoom: 2, note: "Security acchi hai, peaceful locality hai. DN Nagar mein best street shopping hai, bargaining sikho! Metro station nearby hai. College ke baad internship interviews ke liye convenient location. Roommates ke saath cooking classes join karo. Local art gallery mein weekend exhibitions dekho.", contributor: "Anjali Desai", branch: "CS", year: "3rd Year", address: "DN Nagar, Andheri East" },
  { name: "PG 10", rent: 10000, distance: 3, area: 5, gender: "Unisex", amenities: [2,5,8], bedsPerRoom: 5, note: "Bus stop ke paas hai, helpful staff hai. Weekend mein local market explore karo, fresh fruits milte hain. Auto stand nearby hai. College ke baad community service activities ke liye nearby NGO hai. Roommates ke saath cultural events attend karo. Local temple mein peaceful environment hai.", contributor: "Karan Malhotra", branch: "IT", year: "4th Year", address: "Other Areas, Mumbai" },
  { name: "PG 11", rent: 9000, distance: 2, area: 1, gender: "Male", amenities: [1,3,4,6], bedsPerRoom: 3, note: "Affordable hai but rooms chote hain. Andheri station ke paas best street food hai, try karna! Local tip: Station ke paas wala chaiwala best chai deta hai. College ke baad part-time delivery jobs available hai. Roommates ke saath street photography sessions karo. Local gym mein student discount hai.", contributor: "Deepak Joshi", branch: "ENTC", year: "2nd Year", address: "Near Andheri Station, Mumbai" },
  { name: "PG 12", rent: 12000, distance: 7, area: 2, gender: "Female", amenities: [2,4,5,7], bedsPerRoom: 2, note: "Premium amenities hai but thoda pricey hai. Azad Nagar mein best shopping hai, weekend mein explore karo! Local park mein morning walk karo. College ke baad corporate networking events ke liye perfect location. Roommates ke saath spa days organize karo. Local boutique mein designer clothes available hai.", contributor: "Pooja Sharma", branch: "MCA", year: "1st Year", address: "Azad Nagar, Andheri West" },
  { name: "PG 13", rent: 8000, distance: 5, area: 3, gender: "Unisex", amenities: [1,2,3,8], bedsPerRoom: 4, note: "Students ke liye perfect hai, friendly environment hai. Versova beach walking distance pe hai! Weekend mein beach pe jao, sunset dekhne ka mazza hi kuch aur hai. College ke baad beach cleanup drives join karo. Roommates ke saath beach volleyball tournaments karo. Local surf school mein weekend classes available hai.", contributor: "Arun Singh", branch: "CS", year: "3rd Year", address: "Versova Beach Road, Mumbai" },
  { name: "PG 14", rent: 11000, distance: 4, area: 4, gender: "Male", amenities: [3,5,6,7], bedsPerRoom: 6, note: "Spacious hai but station se thoda door hai. DN Nagar mein best street shopping hai, bargaining sikho! Metro station nearby hai. College ke baad startup meetups ke liye nearby co-working spaces hai. Roommates ke saath weekend workshops attend karo. Local tech hub mein networking events regular hote hain.", contributor: "Ravi Kumar", branch: "IT", year: "4th Year", address: "DN Nagar, Andheri East" },
  { name: "PG 15", rent: 9500, distance: 6, area: 5, gender: "Female", amenities: [1,4,7,8], bedsPerRoom: 2, note: "Nice view hai, good ventilation hai. Weekend mein local market explore karo, fresh vegetables milte hain. Auto stand nearby hai. College ke baad organic farming workshops ke liye nearby community garden hai. Roommates ke saath DIY craft sessions karo. Local pottery classes available hai weekend ke liye.", contributor: "Sunita Patel", branch: "ENTC", year: "2nd Year", address: "Other Areas, Mumbai" },
  { name: "PG 16", rent: 10500, distance: 3, area: 1, gender: "Unisex", amenities: [2,5,6,8], bedsPerRoom: 5, note: "Working women ke liye perfect hai. Andheri station ke paas best street food hai, try karna! Local tip: Station ke paas wala juice center fresh juice deta hai. College ke baad career counseling sessions ke liye nearby center hai. Roommates ke saath skill development workshops join karo. Local library mein career books available hai.", contributor: "Lakshmi Devi", branch: "MCA", year: "1st Year", address: "Near Andheri Station, Mumbai" },
  { name: "PG 17", rent: 8500, distance: 2, area: 2, gender: "Male", amenities: [1,3,4,7], bedsPerRoom: 3, note: "Affordable hai but amenities kam hain. Azad Nagar mein best chaat milte hain, weekend mein try karo! Local park mein morning walk karo. College ke baad sports tournaments ke liye nearby ground hai. Roommates ke saath fitness challenges organize karo. Local sports shop mein equipment on rent available hai.", contributor: "Ganesh Rao", branch: "CS", year: "3rd Year", address: "Azad Nagar, Andheri West" },
  { name: "PG 18", rent: 11500, distance: 7, area: 3, gender: "Female", amenities: [2,4,5,8], bedsPerRoom: 2, note: "Premium hai but market se thoda door hai. Versova mein best seafood milte hain, try karna! Beach nearby hai weekend ke liye. College ke baad marine biology workshops ke liye nearby research center hai. Roommates ke saath beach yoga sessions karo. Local diving school mein weekend courses available hai.", contributor: "Meera Iyer", branch: "IT", year: "4th Year", address: "Versova Beach Road, Mumbai" },
  { name: "PG 19", rent: 10000, distance: 5, area: 4, gender: "Unisex", amenities: [1,2,3,7], bedsPerRoom: 4, note: "IT professionals ke liye perfect hai. DN Nagar mein best street shopping hai, bargaining sikho! Metro station nearby hai. College ke baad tech meetups ke liye nearby innovation hub hai. Roommates ke saath hackathon practice sessions karo. Local coding bootcamp mein weekend workshops available hai.", contributor: "Siddharth Mehta", branch: "ENTC", year: "2nd Year", address: "DN Nagar, Andheri East" },
  { name: "PG 20", rent: 9000, distance: 4, area: 5, gender: "Male", amenities: [3,5,6,8], bedsPerRoom: 6, note: "Budget option hai, basic facilities hai. Weekend mein local market explore karo, fresh fruits milte hain. Auto stand nearby hai. College ke baad community service ke liye nearby old age home hai. Roommates ke saath volunteer work karo. Local community center mein skill sharing sessions available hai.", contributor: "Aditya Shah", branch: "MCA", year: "1st Year", address: "Other Areas, Mumbai" }
];

function createPrefDropdowns() {
  // Area Preferences
  const areaPrefsContainer = document.getElementById('areaPrefsContainer');
  areaPrefsContainer.innerHTML = '';
  AREA_NAMES.forEach((area, i) => {
    const row = document.createElement('div');
    row.className = 'area-pref-row';
    // Area name (with icon)
    const areaLabel = document.createElement('span');
    areaLabel.innerHTML = AREA_ICONS[i] + ' ' + area;
    // Preference select (editable, default value set)
    const prefSelect = document.createElement('select');
    prefSelect.id = `areaPref${i+1}`;
    for (let j = 1; j <= 5; j++) {
      const o = document.createElement('option');
      o.value = j;
      o.textContent = j;
      // Set unique default values: 1,2,3,4,5 for each area
      if (j === (i+1)) o.selected = true;
      prefSelect.appendChild(o);
    }
    row.appendChild(areaLabel);
    row.appendChild(document.createTextNode(' Preference: '));
    row.appendChild(prefSelect);
    areaPrefsContainer.appendChild(row);
  });

  // Amenity Preferences (Yes/No checkboxes)
  const amenityPrefsContainer = document.getElementById('amenityPrefsContainer');
  amenityPrefsContainer.innerHTML = '';
  AMENITY_NAMES.forEach((amenity, i) => {
    const row = document.createElement('div');
    row.className = 'amenity-pref-row';
    // Amenity name (with icon)
    const amenityLabel = document.createElement('span');
    amenityLabel.innerHTML = AMENITY_ICONS[i] + ' ' + amenity;
    // Yes/No checkbox
    const yesNo = document.createElement('input');
    yesNo.type = 'checkbox';
    yesNo.id = `amenityPref${i+1}`;
    yesNo.checked = (i < 3); // Default: first 3 checked
    row.appendChild(amenityLabel);
    row.appendChild(document.createTextNode(' '));
    row.appendChild(yesNo);
    row.appendChild(document.createTextNode(' Yes'));
    amenityPrefsContainer.appendChild(row);
  });
}

function getAreaPrefs() {
  return AREA_NAMES.map((_, i) => Number(document.getElementById(`areaPref${i+1}`).value));
}
function getAmenityPrefs() {
  // Returns array of booleans (true if checked)
  return AMENITY_NAMES.map((_, i) => document.getElementById(`amenityPref${i+1}`).checked);
}

function getColorClass(type, userVal, pgVal, areaPref) {
  if (type === 'rent' || type === 'distance') {
    // Lower is better
    if (pgVal < userVal) return 'pg-green';
    if (pgVal > userVal) return 'pg-red';
    return '';
  }
  if (type === 'beds') {
    // Lower is better
    if (pgVal < userVal) return 'pg-green';
    if (pgVal > userVal) return 'pg-red';
    return '';
  }
  if (type === 'area') {
    // areaPref: 1/2 green, 3/4 yellow, 5 red
    if (areaPref === 1 || areaPref === 2) return 'pg-green';
    if (areaPref === 3 || areaPref === 4) return 'pg-yellow';
    if (areaPref === 5) return 'pg-red';
    return '';
  }
  return '';
}

function ordinal(n) {
  if (n === 1) return '1st';
  if (n === 2) return '2nd';
  if (n === 3) return '3rd';
  return n + 'th';
}

function calculateScores() {
  const preferredRent = Number(document.getElementById('preferredRent').value);
  const rentWeight = Number(document.getElementById('rentWeight').value);
  const preferredDistance = Number(document.getElementById('preferredDistance').value);
  const distanceWeight = Number(document.getElementById('distanceWeight').value);
  const areaWeight = Number(document.getElementById('areaWeight').value);
  const preferredGender = document.getElementById('preferredGender').value;
  const amenitiesWeight = Number(document.getElementById('amenitiesWeight').value);
  const preferredBeds = Number(document.getElementById('preferredBeds').value);
  const bedsWeight = Number(document.getElementById('bedsWeight').value);

  const areaPrefs = getAreaPrefs();
  const amenityPrefs = getAmenityPrefs();

  // Validation 1: Check if total weightage is 100
  const totalWeightage = rentWeight + distanceWeight + areaWeight + amenitiesWeight + bedsWeight;
  if (totalWeightage !== 100) {
    alert(`Total weightage must be 100. Current total: ${totalWeightage}`);
    return;
  }

  // Validation 2: Check if any two areas have same preference
  const areaPrefSet = new Set(areaPrefs);
  if (areaPrefSet.size !== areaPrefs.length) {
    alert("No two areas can have the same preference number!");
    return;
  }

  // Calculate weightage remaining and display
  const weightageRemaining = 100 - totalWeightage;
  const weightageDisplay = document.getElementById('weightageRemaining');
  if (weightageDisplay) {
    weightageDisplay.textContent = `Weightage Remaining: ${weightageRemaining}`;
    weightageDisplay.className = weightageRemaining === 0 ? 'weightage-ok' : 'weightage-warning';
  }

  // Create pie chart for weightage distribution
  createWeightageChart(rentWeight, distanceWeight, areaWeight, amenitiesWeight, bedsWeight);

  let pgResults = [];

  pgListings.forEach(pg => {
    // Gender check - strict match, no score calculation
    if (pg.gender !== preferredGender && pg.gender !== 'Unisex') return;

    // 1. Rent Score
    let rentScore = 0;
    if (preferredRent <= 0) {
      rentScore = rentWeight;
    } else if (pg.rent === preferredRent) {
      rentScore = rentWeight;
    } else {
      rentScore = ((preferredRent - pg.rent) / preferredRent) * rentWeight;
      // Apply condition: if rent score < -(weightage given to rent) then assign rent score as 0
      if (rentScore < -rentWeight) {
        rentScore = 0;
      }
    }

    // 2. Distance Score
    let distanceScore = 0;
    if (pg.distance === preferredDistance) {
      distanceScore = distanceWeight;
    } else {
      distanceScore = ((preferredDistance - pg.distance) / preferredDistance) * distanceWeight;
      // Apply conditions for distance score limits
      if (distanceScore < -distanceWeight) {
        distanceScore = -distanceWeight;
      }
      if (distanceScore > distanceWeight) {
        distanceScore = distanceWeight;
      }
    }

    // 3. Area Score
    let areaScore = 0;
    const areaPreference = areaPrefs[pg.area - 1];
    areaScore = (areaPreference / 5) * areaWeight;
    // Area score is strictly between 0 to weightage given to area (already handled by division)

    // 4. Amenities Score
    let amenitiesScore = 0;
    const userYesAmenities = amenityPrefs.map((v, i) => v ? i + 1 : null).filter(x => x !== null);
    const matchCount = userYesAmenities.filter(a => pg.amenities.includes(a)).length;
    amenitiesScore = (matchCount / 8) * amenitiesWeight;
    // Amenities score is strictly between 0 to weightage given to amenities (already handled by division)

    // 5. Beds per room Score
    let bedsScore = 0;
    if (pg.bedsPerRoom === preferredBeds) {
      bedsScore = bedsWeight;
    } else {
      bedsScore = ((preferredBeds - pg.bedsPerRoom) / preferredBeds) * bedsWeight;
      // Apply condition: if beds score < -(weightage for beds given) then beds score = -(weightage for beds given)
      if (bedsScore < -bedsWeight) {
        bedsScore = -bedsWeight;
      }
    }

    // Total Score
    let totalScore = rentScore + distanceScore + areaScore + amenitiesScore + bedsScore;

    // Store PG result with score for sorting
    pgResults.push({
      pg: pg,
      totalScore: totalScore,
      rentScore: rentScore,
      distanceScore: distanceScore,
      areaScore: areaScore,
      amenitiesScore: amenitiesScore,
      bedsScore: bedsScore
    });
  });

  // Sort PGs by total score (highest first)
  pgResults.sort((a, b) => b.totalScore - a.totalScore);

  // Generate HTML for sorted results
  let resultsHTML = '';
  pgResults.forEach(result => {
    const pg = result.pg;
    resultsHTML += `
      <div class="pg-card">
        <div class="pg-title">${pg.name} <span class="area-icon">${AREA_ICONS[pg.area-1]}</span> <span class="area-name">${AREA_NAMES[pg.area-1]}</span></div>
        <div class="contributor-info">
          <span class="contributor-name">${pg.gender === "Female" ? "👧" : pg.gender === "Male" ? "👦" : ""} PG Contributor: ${pg.contributor}</span>
          <span class="contributor-branch">🎓 ${pg.branch} - ${pg.year}</span>
        </div>
        <div class="score-table-wrap">
        <table class="score-table">
          <thead><tr><th>Parameter Type</th><th>Your Expectation</th><th>What PG Has</th><th>Score</th><th>Weightage Given</th></tr></thead>
          <tbody>
            <tr><td>Rent</td><td>${preferredRent}</td><td class="${getColorClass('rent', preferredRent, pg.rent)}">${pg.rent}</td><td>${result.rentScore.toFixed(1)}</td><td>${rentWeight}</td></tr>
            <tr><td>Distance from College</td><td>${preferredDistance}</td><td class="${getColorClass('distance', preferredDistance, pg.distance)}">${pg.distance}</td><td>${result.distanceScore.toFixed(1)}</td><td>${distanceWeight}</td></tr>
            <tr><td>Locality</td><td>${ordinal(areaPrefs[pg.area-1])} preference matched</td><td class="${getColorClass('area', null, null, areaPrefs[pg.area-1])}">${AREA_NAMES[pg.area-1]}</td><td>${result.areaScore.toFixed(1)}</td><td>${areaWeight}</td></tr>
            <tr><td>Students/Room</td><td>${preferredBeds}</td><td class="${getColorClass('beds', preferredBeds, pg.bedsPerRoom)}">${pg.bedsPerRoom}</td><td>${result.bedsScore.toFixed(1)}</td><td>${bedsWeight}</td></tr>
            <tr><td>Amenities</td><td>${AMENITY_NAMES.map((name, i) => amenityPrefs[i] ? name : '').filter(Boolean).join(', ') || 'None'}</td><td>${pg.amenities.map(i => AMENITY_NAMES[i-1]).join(', ')}</td><td>${result.amenitiesScore.toFixed(1)}</td><td>${amenitiesWeight}</td></tr>
          </tbody>
        </table>
        </div>
        <div class="match-score">Match Score: <b>${result.totalScore.toFixed(1)}</b></div>
        <div class="pg-details">
          <span>₹${pg.rent} Rent</span> | <span>${pg.distance} km</span> | <span>Students/Room: ${pg.bedsPerRoom}</span> | <span>${pg.gender}</span><br>
          <span>Area: <span class="area-icon">${AREA_ICONS[pg.area-1]}</span> ${AREA_NAMES[pg.area-1]}</span><br>
          ${pg.amenities.map(i => `<span class="amenity-icon">${AMENITY_ICONS[i-1]}</span> ${AMENITY_NAMES[i-1]}`).join(' ')}
        </div>
        <div class="pg-address">📍 ${pg.address}</div>
        <div class="senior-note"><b>Senior Note:</b> ${pg.note}</div>
      </div>
    `;
  });
  document.getElementById('resultsList').innerHTML = resultsHTML || "<div>No matching PGs found for selected gender.</div>";
}

function updateWeightageRemaining() {
  const rentWeight = Number(document.getElementById('rentWeight').value) || 0;
  const distanceWeight = Number(document.getElementById('distanceWeight').value) || 0;
  const areaWeight = Number(document.getElementById('areaWeight').value) || 0;
  const amenitiesWeight = Number(document.getElementById('amenitiesWeight').value) || 0;
  const bedsWeight = Number(document.getElementById('bedsWeight').value) || 0;

  const totalWeightage = rentWeight + distanceWeight + areaWeight + amenitiesWeight + bedsWeight;
  const weightageRemaining = 100 - totalWeightage;
  
  const weightageDisplay = document.getElementById('weightageRemaining');
  if (weightageDisplay) {
    weightageDisplay.textContent = `Weightage Remaining: ${weightageRemaining}`;
    weightageDisplay.className = weightageRemaining === 0 ? 'weightage-ok' : 'weightage-warning';
  }
}

function createWeightageChart(rentWeight, distanceWeight, areaWeight, amenitiesWeight, bedsWeight) {
  const chartContainer = document.getElementById('weightageChart');
  if (!chartContainer) return;

  const total = rentWeight + distanceWeight + areaWeight + amenitiesWeight + bedsWeight;
  if (total === 0) return;

  // Calculate percentages for each segment
  const rentPercent = (rentWeight / total) * 100;
  const distancePercent = (distanceWeight / total) * 100;
  const areaPercent = (areaWeight / total) * 100;
  const amenitiesPercent = (amenitiesWeight / total) * 100;
  const bedsPercent = (bedsWeight / total) * 100;

  const chartHTML = `
    <div class="weightage-chart">
      <h3>Weightage Distribution</h3>
      <div class="rectangular-pie-chart">
        <div class="chart-bar-container">
          <div class="chart-segments">
            <div class="segment rent-segment" style="width: ${rentPercent}%"></div>
            <div class="segment distance-segment" style="width: ${distancePercent}%"></div>
            <div class="segment area-segment" style="width: ${areaPercent}%"></div>
            <div class="segment amenities-segment" style="width: ${amenitiesPercent}%"></div>
            <div class="segment beds-segment" style="width: ${bedsPercent}%"></div>
          </div>
        </div>
        <div class="chart-legend">
          <div class="legend-item">
            <div class="legend-color rent-color"></div>
            <span>Rent (${rentWeight}%)</span>
          </div>
          <div class="legend-item">
            <div class="legend-color distance-color"></div>
            <span>Distance from College (${distanceWeight}%)</span>
          </div>
          <div class="legend-item">
            <div class="legend-color area-color"></div>
            <span>Locality (${areaWeight}%)</span>
          </div>
          <div class="legend-item">
            <div class="legend-color amenities-color"></div>
            <span>Amenities (${amenitiesWeight}%)</span>
          </div>
          <div class="legend-item">
            <div class="legend-color beds-color"></div>
            <span>Students/Room (${bedsWeight}%)</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  chartContainer.innerHTML = chartHTML;
}

window.onload = function() {
  createPrefDropdowns();
  updateWeightageRemaining();
  calculateScores();
  
  // Add event listeners for real-time weightage updates
  const weightageInputs = ['rentWeight', 'distanceWeight', 'areaWeight', 'amenitiesWeight', 'bedsWeight'];
  weightageInputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', updateWeightageRemaining);
    }
  });
}; 