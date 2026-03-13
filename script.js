// ══════════════════════════════════════════
// i18n TRANSLATIONS
// ══════════════════════════════════════════
const STRINGS = {
  th: {
    tagline:'Smart Energy Platform', topup:'เติมเงิน', thisMonth:'เดือนนี้',
    booking:'จองพลังงาน', stationMap:'แผนที่ปั๊ม', history:'ประวัติ',
    sosTitle:'SOS Energy Assistance', sosSub:'น้ำมัน/แบตหมดกลางทาง กดด่วน!',
    feat1:'📍 GPS ติดตาม', feat2:'⏱ ETA Real-time', feat3:'⚡ Mobile EV',
    newServices:'🆕 บริการใหม่', bookingTitle:'📅 จองพลังงาน',
    bookingDesc:'จองล่วงหน้า ไม่ต้องรอคิว', pumpDesc:'ชำระ Wallet หักทันที เข้าเติมได้เลย',
    bookingCardDesc:'จองล่วงหน้า เลือกน้ำมัน+สาขา', noDeduct:'ไม่หักเงินทันที',
    pumpCardDesc:'ชำระ Wallet เติมได้ทันที', instantDeduct:'หักเงินทันที',
    evCardDesc:'จองช่อง OTP ปลดล็อก',
    recentTx:'📋 รายการล่าสุด', viewAll:'ดูทั้งหมด ›',
    home:'หน้าหลัก', map:'แผนที่', profile:'โปรไฟล์', bookNav:'จอง', pump:'ปั๊ม',
    mapTitle:'แผนที่ปั๊ม PTT', bkkBranches:'📍 สาขา PTT ในกรุงเทพฯ',
    searchStation:'ค้นหาสาขา PTT...',
    bookingTagline:'Smart Reservation · ไม่หักเงินทันที',
    bookingInfo:'📋 เลือกน้ำมัน + วงเงิน + สาขา กดจอง หักเงินเมื่อเติมจริงที่ปั๊ม',
    fuel:'เชื้อเพลิง', evCharge:'EV ชาร์จ', selectFuelType:'เลือกประเภทน้ำมัน',
    budget:'วงเงิน (฿)', approxVol:'ปริมาณโดยประมาณ', litre:'ลิตร',
    approxDist:'ระยะทางโดยประมาณ', km:'กม.', selectBranch:'เลือกสาขา',
    available2min:'✓ ว่าง ~2 นาที', wait18min:'⏳ รอ ~18 นาที',
    evAvail:'ว่าง 2/4 หัว · 8.5฿/kWh', confirmBooking:'ยืนยันจอง (ไม่หักเงินทันที)',
    pumpTagline:'ชำระ Wallet → เติมได้ทันที',
    pumpInfo:'💳 เลือกน้ำมัน + กำหนดวงเงิน กดจ่ายผ่าน Wallet แล้วรับรหัสหัวเติม ไม่ต้องรอคิว',
    selectFuelStep:'เลือกน้ำมัน', setBudgetStep:'ระบุวงเงิน', payStep:'จ่ายเงิน', fillStep:'เติมน้ำมัน',
    nozzleAssigned:'หัวเติมที่ได้รับ', nozzleA3:'หัว A3', status:'สถานะ', ready:'พร้อมใช้งาน',
    fuelBudget:'น้ำมันที่เลือก / วงเงิน', amtPaid:'ยอดชำระ', budgetBaht:'วงเงิน (฿)',
    payWallet:'ชำระเงินผ่าน PTT Wallet',
    myBooking:'การจองของฉัน — พหลโยธิน', today:'วันนี้', slotB2Floor1:'ช่อง B2 · ชั้น 1',
    parkingMap:'🅿️ แผนผังช่องจอด EV — พหลโยธิน', tapSlot:'กดช่องเพื่อดูรายละเอียด / จอง',
    entrance:'⬆ ทางเข้า / ENTRANCE', minLeft:'นาทีเหลือ', driveLane:'🚗 DRIVE LANE 🚗',
    mine:'⭐ ของฉัน', booked:'จองแล้ว', available:'ว่าง', bookable:'จองได้', book:'จอง',
    reserved:'จองล่วงหน้า', mySlot:'ของฉัน ⭐', exit:'⬇ ทางออก / EXIT',
    walkinVsBook:'ℹ️ Walk-in vs จองล่วงหน้า',
    walkinDesc:'มาเติมได้เลย ดูเวลาที่เหลือด้านบน', bookAhead:'จองล่วงหน้า',
    bookAheadDesc:'จองผ่านแอป ใช้ OTP ปลดล็อก', checkinOTP:'เช็คอิน — ป้อน OTP ปลดล็อก B2',
    historyTitle:'ประวัติการใช้งาน', all:'ทั้งหมด', topupFilter:'💰 เติมเงิน',
    pointsRate:'฿1 = 1 pt · ต่ออายุ: 31 ธ.ค. 2568',
    darkMode:'🌙 โหมดมืด', adjustScreen:'ปรับสีหน้าจอ',
    language:'🌐 ภาษา / Language', langSub:'เลือกภาษาของแอป',
    personalInfo:'👤 ข้อมูลส่วนตัว', fullName:'ชื่อ-นามสกุล', email:'อีเมล',
    phone:'เบอร์โทรศัพท์', memberId:'รหัสสมาชิก',
    registeredCars:'🚗 รถที่ลงทะเบียน', addCar:'+ เพิ่มรถ', logout:'🔒 ออกจากระบบ',
    sosModalSub:'ระบบพบตำแหน่งคุณแล้ว — เลือกบริการ',
    serviceType:'🚚 ประเภทบริการ', oilFuel:'น้ำมัน', charge:'ชาร์จ',
    fuelType:'⛽ ชนิดน้ำมัน', connector:'🔌 หัวชาร์จ',
    callSOS:'📞 ยืนยัน — เรียกรถช่วยเหลือ', cancel:'ยกเลิก',
    helpOnWay:'รถช่วยเหลือกำลังมา!', min:'นาที', helpETA:'รถช่วย ETA',
    minETA:'นาที ETA', serviceFee:'ค่าบริการ', cancelIn:'⏱ ยกเลิกได้ภายใน',
    second:'วินาที', cancelTruck:'✕ ยกเลิกการเรียกรถ', closeStillComing:'ปิด (รถยังมาอยู่)',
    otpTitle:'🔓 เช็คอิน EV Smart Station', otpSub:'กรอก OTP 6 หลักที่ส่งไปยัง 081-234-5678',
    otpLabel:'OTP (ตัวอย่าง: 472839)',
    bookB3:'📅 จองช่อง B3', otpWillSend:'📱 ระบบส่ง OTP ให้ 15 นาทีก่อนถึงเวลาจอง',
    selectDate:'📅 เลือกวันที่', selectTime:'เลือกเวลา', strikeOutFull:'(ขีดฆ่า = เต็มแล้ว)',
    confirmB3:'📅 ยืนยันจองช่อง B3',
    topupTitle:'💳 เติมเงิน PTT Wallet', currentBalance:'ยอดปัจจุบัน',
    paymentChannel:'ช่องทางการเติมเงิน', creditCard:'บัตรเครดิต', selectAmount:'เลือกจำนวนเงิน',
    baht:'บาท', bonus:'โบนัส', confirmTopup300:'✅ ยืนยันเติมเงิน 300 บาท',
    addCarTitle:'🚗 เพิ่มรถยนต์', addCarSub:'กรอกข้อมูลรถของคุณ',
    carBrand:'ยี่ห้อรถ', searchBrand:'ค้นหายี่ห้อรถ เช่น Toyota, BYD...',
    carModel:'รุ่นรถ', carModelPh:'เช่น Yaris Cross, Atto 3, Model Y...',
    plateNo:'ป้ายทะเบียน', platePh:'เช่น กข-1234 กทม.', carColor:'สีรถ',
    energyType:'ประเภทพลังงาน', saveCar:'🚗 บันทึกข้อมูลรถ',
    // Dynamic strings
    bookSuccess:'📅 จองสำเร็จ! คิวถูก Hold 30 นาที',
    logoutMsg:'ออกจากระบบ',
    savedPref:'⭐ บันทึกการตั้งค่าแล้ว',
    insufficientBal:'❌ ยอด Wallet ไม่เพียงพอ',
    enterBudget:'❌ กรุณาระบุวงเงิน',
    pumpSuccess:'✅ ชำระแล้ว! เดินไปหัวเติม A3 ได้เลย',
    otpFill:'กรุณากรอก OTP ให้ครบ 6 หลัก',
    fillAll:'⚠️ กรุณากรอกข้อมูลให้ครบ',
    selectTime2:'⚠️ กรุณาเลือกเวลา',
    cancelExpired:'❌ หมดเวลายกเลิก',
    cancelledSOS:'✅ ยกเลิกการเรียกรถแล้ว',
    topupSuccess:'✅ เติมเงินสำเร็จ! ยอดใหม่',
    navTo:'🗺️ นำทาง',
    // EV date labels
    todayDate:'วันนี้',
    navBtn:'› นำทาง',
    navActiveBtn:'✅ นำทาง',
    openStatus:'● เปิด',
    busyStatus:'⏳ คิวรอ',
    spent:'ใช้ไป',
    income:'เติมเงิน',
    etaMin:'นาที',
    mobileFuelETA:'Mobile Fuel — ETA ~8 นาที',
    mobileEVETA:'Mobile EV — ETA ~8 นาที',
    walkinTitle:'ช่อง {id} — Walk-in EV',
    walkinCharging:'กำลังชาร์จอยู่ คาดว่าว่างใน',
    walkinNote:'⚡ ช่องนี้เป็น Walk-in — ไม่ต้องจองล่วงหน้า รอว่างแล้วมาเติมได้เลย',
    closeBtn:'ปิด',
    slotAvail:'ช่อง {id} — ว่าง จองได้',
    slotReady:'พร้อมรับการจอง',
    bookNow:'📅 จองช่อง {id} เลย',
    alreadyBooked:'ช่อง {id} — จองแล้ว ✅',
    bookingConfirmed:'การจองของคุณได้รับการยืนยันแล้ว',
    bookSuccessMsg:'จองช่อง {id} สำเร็จ',
    checkinOTPBtn:'🔓 เช็คอิน / ป้อน OTP',
    otpUnlocked:'🔓 ปลดล็อกช่อง {id} สำเร็จ! เชื่อมต่อหัวชาร์จได้เลย ⚡',
    b3BookedMsg:'✅ จองช่อง B3 สำเร็จ!',
    popupNav:'🗺️ นำทาง',
    myLocation:'📍 ตำแหน่งของฉัน',
    carAdded:'✅ เพิ่ม {brand} {model} แล้ว',
  },
  en: {
    tagline:'Smart Energy Platform', topup:'Top Up', thisMonth:'This Month',
    booking:'Book Energy', stationMap:'Station Map', history:'History',
    sosTitle:'SOS Energy Assistance', sosSub:'Out of fuel/battery? Call now!',
    feat1:'📍 GPS Tracking', feat2:'⏱ ETA Real-time', feat3:'⚡ Mobile EV',
    newServices:'🆕 New Services', bookingTitle:'📅 Book Energy',
    bookingDesc:'Reserve ahead, skip the queue', pumpDesc:'Pay via Wallet, fill up instantly',
    bookingCardDesc:'Pre-book fuel + choose branch', noDeduct:'No instant charge',
    pumpCardDesc:'Pay Wallet, fill instantly', instantDeduct:'Instant payment',
    evCardDesc:'Reserve slot, OTP unlock',
    recentTx:'📋 Recent Transactions', viewAll:'View All ›',
    home:'Home', map:'Map', profile:'Profile', bookNav:'Book', pump:'Pump',
    mapTitle:'PTT Station Map', bkkBranches:'📍 PTT Branches in Bangkok',
    searchStation:'Search PTT stations...',
    bookingTagline:'Smart Reservation · No Instant Charge',
    bookingInfo:'📋 Select fuel + budget + branch, confirm booking. System holds queue 30 min. Charged when you actually fill up.',
    fuel:'Fuel', evCharge:'EV Charge', selectFuelType:'Select Fuel Type',
    budget:'Budget (฿)', approxVol:'Approximate Volume', litre:'L',
    approxDist:'Estimated Range', km:'km', selectBranch:'Select Branch',
    available2min:'✓ Available ~2 min', wait18min:'⏳ Wait ~18 min',
    evAvail:'2/4 ports free · ฿8.5/kWh', confirmBooking:'Confirm Booking (No instant charge)',
    pumpTagline:'Pay Wallet → Fill Up Instantly',
    pumpInfo:'💳 Select fuel + set budget, pay via Wallet, receive nozzle code. No waiting.',
    selectFuelStep:'Select Fuel', setBudgetStep:'Set Budget', payStep:'Pay', fillStep:'Fill Up',
    nozzleAssigned:'Assigned Nozzle', nozzleA3:'Nozzle A3', status:'Status', ready:'Ready',
    fuelBudget:'Selected Fuel / Budget', amtPaid:'Amount Paid', budgetBaht:'Budget (฿)',
    payWallet:'Pay via PTT Wallet',
    myBooking:'My Booking — Phahon Yothin', today:'Today', slotB2Floor1:'Slot B2 · Floor 1',
    parkingMap:'🅿️ EV Parking Map — Phahon Yothin', tapSlot:'Tap slot for details / booking',
    entrance:'⬆ ENTRANCE', minLeft:'min left', driveLane:'🚗 DRIVE LANE 🚗',
    mine:'⭐ Mine', booked:'Booked', available:'Free', bookable:'Book Now', book:'Book',
    reserved:'Pre-booked', mySlot:'Mine ⭐', exit:'⬇ EXIT',
    walkinVsBook:'ℹ️ Walk-in vs Pre-book',
    walkinDesc:'Just come and charge, see time remaining above', bookAhead:'Pre-book',
    bookAheadDesc:'Book via app, unlock with OTP', checkinOTP:'Check-in — Enter OTP to unlock B2',
    historyTitle:'Transaction History', all:'All', topupFilter:'💰 Top Up',
    pointsRate:'฿1 = 1 pt · Expires: 31 Dec 2025',
    darkMode:'🌙 Dark Mode', adjustScreen:'Adjust screen colour',
    language:'🌐 Language', langSub:'Select app language',
    personalInfo:'👤 Personal Info', fullName:'Full Name', email:'Email',
    phone:'Phone Number', memberId:'Member ID',
    registeredCars:'🚗 Registered Cars', addCar:'+ Add Car', logout:'🔒 Log Out',
    sosModalSub:'Location found — Select service type',
    serviceType:'🚚 Service Type', oilFuel:'Fuel', charge:'Charge',
    fuelType:'⛽ Fuel Type', connector:'🔌 Connector',
    callSOS:'📞 Confirm — Call Rescue Vehicle', cancel:'Cancel',
    helpOnWay:'Help is on the way!', min:'min', helpETA:'Rescue ETA',
    minETA:'min ETA', serviceFee:'Service Fee', cancelIn:'⏱ Cancel within',
    second:'seconds', cancelTruck:'✕ Cancel Rescue', closeStillComing:'Close (vehicle still coming)',
    otpTitle:'🔓 EV Station Check-In', otpSub:'Enter 6-digit OTP sent to 081-234-5678',
    otpLabel:'OTP (example: 472839)',
    bookB3:'📅 Book Slot B3', otpWillSend:'📱 OTP will be sent 15 minutes before your booking',
    selectDate:'📅 Select Date', selectTime:'Select Time', strikeOutFull:'(strikethrough = full)',
    confirmB3:'📅 Confirm Slot B3 Booking',
    topupTitle:'💳 Top Up PTT Wallet', currentBalance:'Current Balance',
    paymentChannel:'Payment Method', creditCard:'Credit Card', selectAmount:'Select Amount',
    baht:'THB', bonus:'Bonus', confirmTopup300:'✅ Confirm Top Up 300 THB',
    addCarTitle:'🚗 Add Vehicle', addCarSub:'Enter your vehicle information',
    carBrand:'Brand', searchBrand:'Search brand e.g. Toyota, BYD...',
    carModel:'Model', carModelPh:'e.g. Yaris Cross, Atto 3, Model Y...',
    plateNo:'License Plate', platePh:'e.g. ABC-1234 Bangkok', carColor:'Colour',
    energyType:'Energy Type', saveCar:'🚗 Save Vehicle',
    // Dynamic strings
    bookSuccess:'📅 Booking confirmed! Queue held for 30 min',
    logoutMsg:'Log out',
    savedPref:'⭐ Preference saved',
    insufficientBal:'❌ Insufficient Wallet balance',
    enterBudget:'❌ Please enter budget',
    pumpSuccess:'✅ Paid! Proceed to nozzle A3',
    otpFill:'Please enter all 6 OTP digits',
    fillAll:'⚠️ Please fill in all fields',
    selectTime2:'⚠️ Please select a time',
    cancelExpired:'❌ Cancel time expired',
    cancelledSOS:'✅ Rescue cancelled',
    topupSuccess:'✅ Top up successful! New balance',
    navTo:'🗺️ Navigate to',
    todayDate:'Today',
    navBtn:'› Navigate',
    navActiveBtn:'✅ Navigating',
    openStatus:'● Open',
    busyStatus:'⏳ Queue',
    spent:'Spent',
    income:'Topped Up',
    etaMin:'min',
    mobileFuelETA:'Mobile Fuel — ETA ~8 min',
    mobileEVETA:'Mobile EV — ETA ~8 min',
    walkinTitle:'Slot {id} — Walk-in EV',
    walkinCharging:'Currently charging, estimated free in',
    walkinNote:'⚡ Walk-in slot — No booking needed. Come when free.',
    closeBtn:'Close',
    slotAvail:'Slot {id} — Available',
    slotReady:'Ready to Book',
    bookNow:'📅 Book Slot {id} Now',
    alreadyBooked:'Slot {id} — Booked ✅',
    bookingConfirmed:'Your booking has been confirmed',
    bookSuccessMsg:'Slot {id} booked',
    checkinOTPBtn:'🔓 Check-in / Enter OTP',
    otpUnlocked:'🔓 Slot {id} unlocked! Connect charger ⚡',
    b3BookedMsg:'✅ Slot B3 booked!',
    popupNav:'🗺️ Navigate',
    myLocation:'📍 My Location',
    carAdded:'✅ Added {brand} {model}',
  }
};

let LANG = 'th';
function T(key){ return STRINGS[LANG][key] || STRINGS.th[key] || key; }
function Tf(key,vars){let s=T(key);Object.entries(vars).forEach(([k,v])=>s=s.replace('{'+k+'}',v));return s;}

function setLang(lang){
  LANG = lang;
  // Update global toggle buttons
  document.getElementById('glb-th').classList.toggle('on', lang==='th');
  document.getElementById('glb-en').classList.toggle('on', lang==='en');
  document.getElementById('prof-th').classList.toggle('on', lang==='th');
  document.getElementById('prof-en').classList.toggle('on', lang==='en');
  // Apply all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(key && STRINGS[lang][key]!==undefined) el.textContent=STRINGS[lang][key];
  });
  // Apply placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key=el.getAttribute('data-i18n-ph');
    if(key && STRINGS[lang][key]!==undefined) el.placeholder=STRINGS[lang][key];
  });
  // Re-render dynamic content
  renderHomeHistory();
  renderStationList();
  if(document.getElementById('hist-list').children.length>0) renderHistory('all');
}

// ══════════════════════════════════════════
// FUEL TYPES
// ══════════════════════════════════════════
const FUEL_TYPES = [
  {name:'Gasohol 91',price:33.25,badge:'E10',km:14},
  {name:'Gasohol 95',price:34.35,badge:'E10',km:14},
  {name:'E20',price:35.49,badge:'Ethanol',km:13},
  {name:'E85',price:22.04,badge:'Flex',km:10},
  {name:'Diesel B7',price:29.94,badge:'B7',km:16},
  {name:'Diesel B10',price:30.44,badge:'B10',km:16},
  {name:'Diesel B20',price:31.04,badge:'B20',km:15},
  {name:'Premium 97',price:47.95,badge:'Hi-Oct',km:15},
  {name:'NGV',price:15.59,badge:'Gas',km:12},
];

const ALL_BRANDS = ['Toyota','Honda','Nissan','Mazda','Mitsubishi','Subaru','Suzuki','Isuzu','Daihatsu','Lexus','Infiniti','Acura','Hyundai','Kia','Genesis','SsangYong','BYD','MG (SAIC)','GWM / Haval','Chery','Geely','GAC Aion','ORA','NETA','Zeekr','NIO','Xpeng','Li Auto','Leapmotor','Voyah','Wuling','JAC','Foton','DFSK','Mercedes-Benz','BMW','Audi','Volkswagen','Porsche','MINI','Smart','Volvo','Peugeot','Renault','Citroën','Fiat','Alfa Romeo','Ferrari','Lamborghini','Bentley','Rolls-Royce','Maserati','Aston Martin','McLaren','Bugatti','Land Rover','Jaguar','Lotus','Ford','Chevrolet','Jeep','Dodge','Ram','GMC','Cadillac','Lincoln','Tesla','Rivian','Lucid','Tata','Mahindra','Proton','Perodua'].sort();

const APP = {
  balance:2450, pts:1240,
  sosDispatched:false, sosTimer:null, sosCancelSec:60, sosCancelTimer:null,
  navStation:null,
  selectedTopupAmt:300, selectedTopupBonus:0,
  theme:'dark',
  map:null, mapInitialized:false,
  selectedBrand:'',
  b3Booked:false, b3BookingTime:'', b3BookingDate:'',
  selEvDate:'', selEvTime:'',
  cars:[
    {brand:'Toyota',model:'Yaris Cross',plate:'กข-1234 กทม.',color:'ขาว',colorHex:'#E8E8E8',energy:'g95',fuelLabel:'Gasohol 95',year:'2022'},
    {brand:'BYD',model:'Atto 3',plate:'คค-5678 กทม.',color:'น้ำเงิน',colorHex:'#1565C0',energy:'ev',fuelLabel:'EV · CCS2',year:'2023',evPlug:'CCS2'}
  ],
  transactions:[
    {type:'fuel',icon:'⛽',bg:'rgba(60,118,241,.1)',name_th:'เติม Gasohol 95',name_en:'Fill Gasohol 95',meta_th:'5 ม.ค. 68 · 10:32 · พหลโยธิน · 9.08L',meta_en:'5 Jan 25 · 10:32 · Phahon Yothin · 9.08L',amt:-312},
    {type:'topup',icon:'💰',bg:'rgba(30,120,200,.12)',name_th:'เติม PTT Wallet',name_en:'PTT Wallet Top Up',meta_th:'4 ม.ค. 68 · 08:15 · PromptPay',meta_en:'4 Jan 25 · 08:15 · PromptPay',amt:1000},
    {type:'ev',icon:'🔌',bg:'rgba(46,125,50,.1)',name_th:'ชาร์จ EV DC Fast 50kW',name_en:'EV DC Fast 50kW Charge',meta_th:'2 ม.ค. 68 · 14:20 · พระราม 9 · 38.5kWh',meta_en:'2 Jan 25 · 14:20 · Rama 9 · 38.5kWh',amt:-327},
    {type:'fuel',icon:'⛽',bg:'rgba(60,118,241,.1)',name_th:'เติม Diesel B7',name_en:'Fill Diesel B7',meta_th:'28 ธ.ค. 67 · 07:45 · ลาดพร้าว · 20.04L',meta_en:'28 Dec 24 · 07:45 · Lad Phrao · 20.04L',amt:-600},
    {type:'sos',icon:'🆘',bg:'rgba(229,57,53,.1)',name_th:'SOS Mobile Fuel',name_en:'SOS Mobile Fuel',meta_th:'20 ธ.ค. 67 · 18:30 · วิภาวดี · 5L Gasohol 95',meta_en:'20 Dec 24 · 18:30 · Vibhavadi · 5L Gasohol 95',amt:-285}
  ],
  stations:[
    {id:'A',lat:13.8147,lng:100.5583,name:'PTT พหลโยธิน-วังหิน',name_en:'PTT Phahon Yothin-Wang Hin',addr:'ถ.พหลโยธิน แขวงลาดยาว',addr_en:'Phahon Yothin Rd, Lad Yao',dist:'0.8 km',status:'open',type:'both',shops:['☕ Café Amazon','🧋 Pearly Tea','🏪 Jiffy','🍕 The Pizza Company'],tagLabels:['⛽ Fuel','⚡ EV 50kW'],ev:'DC 50kW · CCS2',rating:4.3,reviews:412,hours:'เปิด 24 ชั่วโมง',hours_en:'Open 24 hours',fuels:['Gasohol 91','Gasohol 95','E20','E85','Diesel B7','NGV'],photos:['⛽','🔋','☕'],colors:['#0D47A1','#1565C0','#388E3C'],queueTime:2,evFree:2,evTotal:4,evPower:'DC 50kW'},
    {id:'B',lat:13.7566,lng:100.5677,name:'PTT สุขุมวิท 62',name_en:'PTT Sukhumvit 62',addr:'ถ.สุขุมวิท แขวงบางจาก',addr_en:'Sukhumvit Rd, Bang Chak',dist:'1.2 km',status:'open',type:'both',shops:['☕ Café Amazon','🏪 7-Eleven','🍗 KFC'],tagLabels:['⛽ Fuel','⚡ EV 22kW'],ev:'AC 22kW · Type2',rating:4.1,reviews:289,hours:'05:00 – 24:00',hours_en:'05:00 – 24:00',fuels:['Gasohol 91','Gasohol 95','Diesel B7','NGV'],photos:['⛽','🏪','🍗'],colors:['#0277BD','#01579B','#006064'],queueTime:5,evFree:1,evTotal:2,evPower:'AC 22kW'},
    {id:'C',lat:13.7464,lng:100.5437,name:'PTT EV Hub พระราม 9',name_en:'PTT EV Hub Rama 9',addr:'ถ.พระราม 9 แขวงห้วยขวาง',addr_en:'Rama 9 Rd, Huai Khwang',dist:'2.1 km',status:'open',type:'ev',shops:['☕ Black Canyon','🏪 7-Eleven','🍔 Burger King'],tagLabels:['⚡ DC 150kW','⚡ AC 22kW'],ev:'DC 150kW · CCS2/CHAdeMO',rating:4.6,reviews:633,hours:'เปิด 24 ชั่วโมง',hours_en:'Open 24 hours',fuels:[],photos:['⚡','🔌','🏪'],colors:['#1B5E20','#2E7D32','#1565C0'],queueTime:0,evFree:3,evTotal:6,evPower:'DC 150kW'},
    {id:'D',lat:13.7920,lng:100.4994,name:'PTT พหลโยธิน 32',name_en:'PTT Phahon Yothin 32',addr:'ถ.พหลโยธิน แขวงจตุจักร',addr_en:'Phahon Yothin Rd, Chatuchak',dist:'3.0 km',status:'busy',type:'fuel',shops:['☕ Café Amazon','🏪 Jiffy'],tagLabels:['⛽ 91/95/E20/B7/NGV'],rating:3.8,reviews:156,hours:'เปิด 24 ชั่วโมง',hours_en:'Open 24 hours',fuels:['Gasohol 91','Gasohol 95','E20','Diesel B7','NGV'],photos:['⛽','🏪','☕'],colors:['#37474F','#455A64','#01579B'],queueTime:18,evFree:0,evTotal:0,evPower:''},
    {id:'E',lat:13.7281,lng:100.5794,name:'PTT สาทร-นราธิวาส',name_en:'PTT Sathon-Narathiwas',addr:'ถ.นราธิวาส แขวงทุ่งมหาเมฆ',addr_en:'Narathiwas Rd, Thung Maha Mek',dist:'3.8 km',status:'open',type:'both',shops:['☕ Café Amazon','🏪 7-Eleven','🥪 S&P','🌮 Subway'],tagLabels:['⛽ Fuel','⚡ EV 50kW'],ev:'DC 50kW · CCS2',rating:4.4,reviews:521,hours:'เปิด 24 ชั่วโมง',hours_en:'Open 24 hours',fuels:['Gasohol 91','Gasohol 95','E20','Diesel B7','Diesel B10'],photos:['⛽','⚡','🥪'],colors:['#4A148C','#1565C0','#1B5E20'],queueTime:3,evFree:1,evTotal:2,evPower:'DC 50kW'},
    {id:'F',lat:13.7601,lng:100.4984,name:'PTT พระราม 3',name_en:'PTT Rama 3',addr:'ถ.พระราม 3 แขวงช่องนนทรี',addr_en:'Rama 3 Rd, Chong Nonsi',dist:'4.5 km',status:'open',type:'both',shops:['☕ Café Amazon','🍗 Chester Grill','🏪 7-Eleven'],tagLabels:['⛽ Fuel','⚡ EV 22kW'],ev:'AC 22kW · Type2',rating:4.0,reviews:198,hours:'06:00 – 23:00',hours_en:'06:00 – 23:00',fuels:['Gasohol 91','Gasohol 95','Diesel B7'],photos:['⛽','🍗','🏪'],colors:['#BF360C','#0277BD','#2E7D32'],queueTime:7,evFree:0,evTotal:2,evPower:'AC 22kW'},
    {id:'G',lat:13.8010,lng:100.5498,name:'PTT ประดิษฐ์มนูธรรม',name_en:'PTT Pradit Manutham',addr:'ถ.ประดิษฐ์มนูธรรม แขวงลาดพร้าว',addr_en:'Pradit Manutham Rd, Lad Phrao',dist:'4.2 km',status:'open',type:'fuel',shops:['☕ Café Amazon','🏪 Jiffy','🌮 A&W'],tagLabels:['⛽ 91/95/E20/B7/NGV'],rating:4.2,reviews:334,hours:'เปิด 24 ชั่วโมง',hours_en:'Open 24 hours',fuels:['Gasohol 91','Gasohol 95','E20','Diesel B7','NGV'],photos:['⛽','☕','🌮'],colors:['#004D40','#0D47A1','#37474F'],queueTime:4,evFree:0,evTotal:0,evPower:''},
    {id:'H',lat:13.7221,lng:100.5234,name:'PTT บางนา กม.5',name_en:'PTT Bang Na km.5',addr:'ถ.บางนา-ตราด กม.5',addr_en:'Bang Na-Trat Rd km.5',dist:'5.1 km',status:'open',type:'both',shops:['☕ Café Amazon','🏪 7-Eleven','🍗 KFC','🍕 The Pizza Co.'],tagLabels:['⛽ Fuel','⚡ EV 50kW'],ev:'DC 50kW · CCS2',rating:4.5,reviews:778,hours:'เปิด 24 ชั่วโมง',hours_en:'Open 24 hours',fuels:['Gasohol 91','Gasohol 95','E20','E85','Diesel B7','Diesel B10','NGV'],photos:['⛽','⚡','🍗'],colors:['#1A237E','#283593','#1B5E20'],queueTime:1,evFree:4,evTotal:4,evPower:'DC 50kW'},
    {id:'I',lat:13.8120,lng:100.6200,name:'PTT ลาดกระบัง',name_en:'PTT Lad Krabang',addr:'ถ.ลาดกระบัง แขวงลาดกระบัง',addr_en:'Lad Krabang Rd',dist:'6.2 km',status:'busy',type:'both',shops:['☕ Café Amazon','🏪 Jiffy','🍗 ไก่ย่างห้าดาว'],tagLabels:['⛽ Fuel','⚡ EV 22kW'],ev:'AC 22kW · Type2',rating:3.9,reviews:142,hours:'เปิด 24 ชั่วโมง',hours_en:'Open 24 hours',fuels:['Gasohol 91','Gasohol 95','Diesel B7'],photos:['⛽','🍗','🏪'],colors:['#3E2723','#01579B','#1B5E20'],queueTime:22,evFree:0,evTotal:2,evPower:'AC 22kW'},
    {id:'J',lat:13.7394,lng:100.4480,name:'PTT ตลิ่งชัน',name_en:'PTT Taling Chan',addr:'ถ.บรมราชชนนี แขวงตลิ่งชัน',addr_en:'Borommaratchachonnani Rd, Taling Chan',dist:'7.8 km',status:'open',type:'fuel',shops:['☕ Café Amazon','🏪 Jiffy'],tagLabels:['⛽ 91/95/B7/NGV'],rating:4.1,reviews:97,hours:'05:00 – 24:00',hours_en:'05:00 – 24:00',fuels:['Gasohol 91','Gasohol 95','Diesel B7','NGV'],photos:['⛽','☕','🏪'],colors:['#006064','#0D47A1','#2E7D32'],queueTime:6,evFree:0,evTotal:0,evPower:''},
  ]
};

function sName(s){return LANG==='en'?(s.name_en||s.name):s.name;}
function sAddr(s){return LANG==='en'?(s.addr_en||s.addr):s.addr;}
function txName(tx){return LANG==='en'?(tx.name_en||tx.name_th):tx.name_th;}
function txMeta(tx){return LANG==='en'?(tx.meta_en||tx.meta_th):tx.meta_th;}

// Clock
// clock removed (no status bar)
// Init active nav on home
document.addEventListener('DOMContentLoaded', function(){
  // Show desktop watermark logo
  if(window.innerWidth >= 600) document.getElementById('desktop-brand').style.display='block';
  window.addEventListener('resize', ()=>{
    document.getElementById('desktop-brand').style.display = window.innerWidth>=600 ? 'block':'none';
  });
  const homeNav = document.getElementById('nav-home');
  if(homeNav){ homeNav.classList.add('on'); const lbl=homeNav.querySelector('.nlbl'); if(lbl)lbl.style.color='var(--p500)'; }
  setLang('th');
});

// Theme
function toggleTheme(){APP.theme=APP.theme==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',APP.theme);document.getElementById('theme-switch').classList.toggle('on',APP.theme==='dark');if(APP.map)APP.map.invalidateSize();}

// Nav
function goTo(id){
  document.querySelectorAll('.view').forEach(v=>{v.classList.remove('active');v.style.display='none';});
  const el=document.getElementById(id);
  el.classList.add('active');
  el.style.display=(id==='v-map')?'flex':'block';
  el.scrollTop=0;
  if(id==='v-history')renderHistory('all');
  if(id==='v-profile')renderCars();
  if(id==='v-home')renderHomeHistory();
  if(id==='v-map')setTimeout(()=>{initMap();APP.map&&APP.map.invalidateSize();},100);
  if(id!=='v-map'){try{closeInlineSBS();}catch(e){}}
  // Update active nav item
  const navMap={'v-home':'nav-home','v-map':'nav-map','v-history':'nav-history','v-profile':'nav-profile','v-energy':'nav-map','v-pump':'nav-map','v-ev':'nav-map'};
  document.querySelectorAll('.nav .ni').forEach(n=>n.classList.remove('on'));
  document.querySelectorAll('.nav .ni .nlbl').forEach(n=>n.style.color='');
  const activeNav=document.getElementById(navMap[id]);
  if(activeNav){activeNav.classList.add('on');const lbl=activeNav.querySelector('.nlbl');if(lbl)lbl.style.color='var(--p500)';}
}
function closeOL(id){document.getElementById(id).classList.remove('show');}
function closeByOL(e,id){if(e.target===document.getElementById(id))closeOL(id);}

// Balance
function updateBalDisplay(){
  const fmt=APP.balance.toLocaleString();
  document.querySelectorAll('#bal-display').forEach(el=>el.textContent=fmt);
  document.querySelectorAll('#pts-display').forEach(el=>el.textContent=APP.pts.toLocaleString()+' pts');
  const p=document.getElementById('prof-pts');if(p)p.textContent=APP.pts.toLocaleString();
  const tb=document.getElementById('topup-current-bal');if(tb)tb.textContent='฿'+fmt+'.00';
}

// Fuel Grid
function renderFuelGrid(cid,selIdx,fn){
  const el=document.getElementById(cid);if(!el)return;
  el.innerHTML=FUEL_TYPES.map((f,i)=>`<div class="fuel-chip ${i===selIdx?'on':''}" onclick="${fn}(this,'${f.price}','${f.name}',${f.km})"><div class="fn">${f.name}</div><div class="fp">${f.price} ฿/L</div><div class="fb">${f.badge}</div></div>`).join('');
}

// Map
function initMap(){
  if(APP.mapInitialized){APP.map.invalidateSize();return;}
  APP.mapInitialized=true;
  const myLat=13.7563,myLng=100.5018;
  const map=L.map('leaflet-map',{zoomControl:true}).setView([myLat,myLng],12);
  APP.map=map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:19}).addTo(map);
  const meIcon=L.divIcon({html:`<div style="width:18px;height:18px;background:#3C76F1;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 6px rgba(60,118,241,.25);"></div>`,className:'',iconAnchor:[9,9]});
  L.marker([myLat,myLng],{icon:meIcon}).addTo(map).bindPopup(`<div style="padding:8px;font-size:12px;font-weight:700;color:#001B4B;">${T('myLocation')}</div>`);
  APP.stations.forEach(s=>{
    const color=s.type==='ev'?'#2E7D32':s.type==='both'?'#098ABE':'#001B4B';
    const emoji=s.type==='ev'?'⚡':s.type==='both'?'🔋':'⛽';
    const sc=s.status==='open'?'#2E7D32':'#E65100';
    const icon=L.divIcon({html:`<div style="background:#fff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 3px 10px rgba(0,0,0,.2);border:2.5px solid ${color};">${emoji}</div><div style="width:2px;height:6px;background:${color};margin:0 auto;"></div>`,className:'',iconAnchor:[18,42]});
    const shopsHtml=s.shops.slice(0,4).map(sh=>`<span class="shop-tag">${sh}</span>`).join('');
    const statusTxt=s.status==='open'?T('openStatus'):T('busyStatus');
    const popup=L.popup({maxWidth:280}).setContent(`<div class="popup-inner"><div class="popup-header"><span style="font-size:20px;">${emoji}</span><div><div class="popup-name">${sName(s)}</div><div class="popup-dist">📍 ${sAddr(s)} · ${s.dist} · <span style="color:${sc};font-weight:700;">${statusTxt}</span></div></div></div><div class="shop-tags">${shopsHtml}${s.shops.length>4?`<span class="shop-tag">+${s.shops.length-4}</span>`:''}</div>${s.ev?`<div style="font-size:10px;padding:4px 0;color:#2E7D32;font-weight:700;margin-bottom:8px;">⚡ ${s.ev}</div>`:''}<button class="popup-nav-btn" onclick="navToStation('${s.id}');document.querySelectorAll('.leaflet-popup-close-button').forEach(b=>b.click())">${T('popupNav')}</button></div>`);
    L.marker([s.lat,s.lng],{icon}).addTo(map).on('click',function(){map.setView([s.lat,s.lng],15);openSBS(s.id);});
  });
  renderStationList();
  // ── โหลดปั๊ม PTT จริงจาก OpenStreetMap (Overpass API) ──
  fetchRealPTTStations(map);
}

function fetchRealPTTStations(map){
  // แสดง loading badge บนแผนที่
  const loadBadge=document.createElement('div');
  loadBadge.id='osm-load-badge';
  loadBadge.style.cssText='position:absolute;bottom:80px;left:50%;transform:translateX(-50%);z-index:1000;background:rgba(0,27,75,.85);color:#fff;font-size:11px;font-weight:700;padding:6px 14px;border-radius:20px;backdrop-filter:blur(6px);font-family:"Prompt",sans-serif;';
  loadBadge.textContent='🛰 กำลังโหลดปั๊ม PTT จาก OpenStreetMap...';
  document.getElementById('v-map').appendChild(loadBadge);

  // Overpass query: ค้นหา PTT ในประเทศไทย (bbox ครอบกรุงเทพและปริมณฑล)
  const query=`
    [out:json][timeout:25];
    (
      node["brand"="PTT"]["amenity"="fuel"](12.5,99.5,14.5,101.5);
      node["name"~"PTT","i"]["amenity"="fuel"](12.5,99.5,14.5,101.5);
      way["brand"="PTT"]["amenity"="fuel"](12.5,99.5,14.5,101.5);
    );
    out center;
  `;
  const url='https://overpass.kumi.systems/api/interpreter?data='+encodeURIComponent(query);

  fetch(url)
    .then(r=>r.json())
    .then(data=>{
      loadBadge.remove();
      const realPTTIcon=L.divIcon({
        html:`<div style="background:#E8001D;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 3px 10px rgba(0,0,0,.3);border:2.5px solid #fff;">⛽</div><div style="width:2px;height:5px;background:#E8001D;margin:0 auto;"></div>`,
        className:'',iconAnchor:[16,37]
      });
      let count=0;
      data.elements.forEach(el=>{
        const lat=el.lat||(el.center&&el.center.lat);
        const lng=el.lon||(el.center&&el.center.lon);
        if(!lat||!lng)return;
        const name=el.tags.name||el.tags['name:th']||'PTT Station';
        const addr=el.tags['addr:street']||el.tags['addr:full']||'';
        const hours=el.tags.opening_hours||'';
        const evTag=el.tags.motorcar==='yes'||el.tags['socket:type2']?'⚡ มี EV Charger':'';
        L.marker([lat,lng],{icon:realPTTIcon})
          .addTo(map)
          .bindPopup(`<div class="popup-inner">
            <div class="popup-header">
              <span style="font-size:20px;">⛽</span>
              <div>
                <div class="popup-name">${name}</div>
                <div class="popup-dist" style="color:#E8001D;font-weight:700;">📍 ข้อมูลจริง (OSM)</div>
                ${addr?`<div class="popup-dist">${addr}</div>`:''}
                ${hours?`<div class="popup-dist">🕐 ${hours}</div>`:''}
                ${evTag?`<div style="font-size:10px;color:#2E7D32;font-weight:700;margin-top:4px;">${evTag}</div>`:''}
              </div>
            </div>
            <button class="popup-nav-btn" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}','_blank')">🗺️ นำทางใน Google Maps</button>
          </div>`,{maxWidth:280});
        count++;
      });
      // แสดง badge สรุป
      const doneBadge=document.createElement('div');
      doneBadge.style.cssText='position:absolute;bottom:80px;left:50%;transform:translateX(-50%);z-index:1000;background:rgba(232,0,29,.9);color:#fff;font-size:11px;font-weight:700;padding:6px 14px;border-radius:20px;font-family:"Prompt",sans-serif;';
      doneBadge.textContent=`⛽ พบปั๊ม PTT จริง ${count} สาขา (สีแดง = OSM)`;
      document.getElementById('v-map').appendChild(doneBadge);
      setTimeout(()=>doneBadge.remove(),4000);
    })
    .catch(err=>{
      loadBadge.textContent='⚠️ โหลด OSM ไม่สำเร็จ ลองใหม่อีกครั้ง';
      setTimeout(()=>loadBadge.remove(),3000);
      console.warn('Overpass API error:',err);
    });
}
function navToStation(id){
  APP.navStation=id;const s=APP.stations.find(x=>x.id===id);
  const toast=document.getElementById('nav-toast-map');
  document.getElementById('nav-toast-title').textContent=T('navTo')+' '+sName(s);
  document.getElementById('nav-toast-sub').textContent=sAddr(s)+' · '+s.dist;
  toast.style.display='flex';renderStationList();
}
function cancelNav(){APP.navStation=null;document.getElementById('nav-toast-map').style.display='none';renderStationList();}
function renderStationList(){
  const el=document.getElementById('station-list');if(!el)return;
  el.innerHTML=APP.stations.map(s=>{
    const isNav=APP.navStation===s.id;
    const emoji=s.type==='ev'?'⚡':s.type==='both'?'🔋':'⛽';
    const statusTxt=s.status==='open'?T('openStatus'):T('busyStatus');
    return `<div class="station-item ${isNav?'navigating':''}" onclick="navToStation('${s.id}');if(APP.map){APP.map.setView([${s.lat},${s.lng}],15);}">
      <div class="st-icon">${emoji}</div>
      <div class="st-info">
        <div class="st-name">${sName(s)}</div>
        <div class="st-dist">${sAddr(s)} · ${s.dist}</div>
        <div class="st-tags">
          ${s.tagLabels.map(tg=>`<span class="st-tag ${(tg.includes('EV')||tg.includes('⚡')||tg.includes('🔋'))?'ev':'fuel'}">${tg}</span>`).join('')}
          <span class="st-tag ${s.status==='open'?'open':'busy'}">${statusTxt}</span>
        </div>
        <div style="font-size:9px;color:var(--text3);margin-top:3px;">🏪 ${s.shops.slice(0,2).join(' · ')}${s.shops.length>2?` +${s.shops.length-2}`:''}</div>
      </div>
      <div class="nav-go-btn ${isNav?'active':''}">${isNav?T('navActiveBtn'):T('navBtn')}</div>
    </div>`;
  }).join('');
}

// History
function renderHomeHistory(){
  const el=document.getElementById('home-hist');if(!el)return;
  el.innerHTML=APP.transactions.slice(0,3).map(tx=>`<div class="hist-item"><div class="hi-icon" style="background:${tx.bg};">${tx.icon}</div><div class="hi-info"><div class="hi-name">${txName(tx)}</div><div class="hi-meta">${txMeta(tx)}</div></div><div class="hi-amt ${tx.amt<0?'m':'p'}">${tx.amt<0?'-':'+'}฿${Math.abs(tx.amt)}</div></div>`).join('');
}
function renderHistory(cat){
  const list=document.getElementById('hist-list');
  const fil=cat==='all'?APP.transactions:APP.transactions.filter(t=>t.type===cat);
  list.innerHTML=fil.length===0?`<div style="padding:18px;text-align:center;color:var(--text3);font-size:12px;">${LANG==='en'?'No transactions':'ไม่มีรายการ'}</div>`
    :fil.map(tx=>`<div class="hist-item"><div class="hi-icon" style="background:${tx.bg};">${tx.icon}</div><div class="hi-info"><div class="hi-name">${txName(tx)}</div><div class="hi-meta">${txMeta(tx)}</div></div><div class="hi-amt ${tx.amt<0?'m':'p'}">${tx.amt<0?'-':'+'}฿${Math.abs(tx.amt)}</div></div>`).join('');
  const spent=APP.transactions.filter(t=>t.amt<0).reduce((s,t)=>s+Math.abs(t.amt),0);
  const income=APP.transactions.filter(t=>t.amt>0).reduce((s,t)=>s+t.amt,0);
  document.getElementById('hist-summary').innerHTML=`
    <div><div style="font-family:'Prompt',sans-serif;font-size:16px;font-weight:800;color:var(--red);">฿${spent.toLocaleString()}</div><div style="font-size:9px;color:var(--text2);margin-top:2px;">${T('spent')}</div></div>
    <div style="width:1px;background:var(--border);"></div>
    <div><div style="font-family:'Prompt',sans-serif;font-size:16px;font-weight:800;color:var(--green);">฿${income.toLocaleString()}</div><div style="font-size:9px;color:var(--text2);margin-top:2px;">${T('income')}</div></div>
    <div style="width:1px;background:var(--border);"></div>
    <div><div style="font-family:'Prompt',sans-serif;font-size:16px;font-weight:800;color:var(--p500);">${APP.pts.toLocaleString()}</div><div style="font-size:9px;color:var(--text2);margin-top:2px;">BlueCard pts</div></div>`;
}
function filt(el,cat){document.querySelectorAll('#hist-filters .fc').forEach(f=>f.classList.remove('on'));el.classList.add('on');renderHistory(cat);}

// Cars
function carSVG(hex){return`<svg viewBox="0 0 80 38" width="54" height="26"><rect x="3" y="17" width="74" height="16" rx="5" fill="${hex}" stroke="#999" stroke-width="1.2"/><rect x="12" y="8" width="56" height="14" rx="5" fill="${hex}" stroke="#999" stroke-width="1.2"/><rect x="15" y="9" width="22" height="10" rx="2" fill="rgba(180,220,255,.55)"/><rect x="42" y="9" width="23" height="10" rx="2" fill="rgba(180,220,255,.55)"/><circle cx="19" cy="33" r="5" fill="#2a2a2a"/><circle cx="19" cy="33" r="2.5" fill="#888"/><circle cx="61" cy="33" r="5" fill="#2a2a2a"/><circle cx="61" cy="33" r="2.5" fill="#888"/><rect x="4" y="20" width="7" height="5" rx="1.5" fill="#FFE082"/><rect x="69" y="20" width="7" height="5" rx="1.5" fill="#EF9A9A"/></svg>`;}
function renderCars(){
  const c=document.getElementById('car-cards-container');if(!c)return;
  let html=APP.cars.map((car,i)=>`<div class="car-card ${i===0?'active-car':''}" onclick="selectCar(this,${i})">${i===0?'<div style="position:absolute;top:9px;right:9px;width:7px;height:7px;background:var(--p500);border-radius:50%;"></div>':''}<div style="margin-bottom:6px;">${carSVG(car.colorHex)}</div><div class="car-model">${car.brand} ${car.model}</div><div class="car-plate">${car.plate}</div><div class="car-fuel-badge" style="${car.energy==='ev'?'background:var(--green-light);color:var(--green);':'background:rgba(60,118,241,.1);color:var(--p600);'}">${car.fuelLabel}</div><div style="font-size:9px;color:var(--text3);margin-top:3px;">${car.color} · ${car.year}</div></div>`).join('');
  html+=`<div class="car-add" onclick="openAddCar()"><div class="car-add-icon">➕</div><div class="car-add-lbl">${T('addCar')}</div></div>`;
  c.innerHTML=html;
}
function selectCar(el,idx){document.querySelectorAll('.car-card').forEach((c,i)=>c.classList.toggle('active-car',i===idx));}

// Brand Search
function initBrandDropdown(){
  const dd=document.getElementById('brand-dropdown');
  dd.innerHTML=ALL_BRANDS.map(b=>`<div class="brand-option" onclick="selectBrand('${b.replace(/'/g,"\\'")}')"><span style="font-size:14px;">🚗</span> ${b}</div>`).join('');
}
function filterBrands(q){document.querySelectorAll('#brand-dropdown .brand-option').forEach(o=>{o.classList.toggle('hidden',q.length>0&&!o.textContent.toLowerCase().includes(q.toLowerCase()));});}
function selectBrand(brand){
  APP.selectedBrand=brand;
  document.getElementById('brand-search-section').style.display='none';
  document.getElementById('brand-selected-display').style.display='block';
  document.getElementById('brand-selected-text').textContent='🚗 '+brand;
  const evB=['BYD','NIO','Xpeng','Tesla','Rivian','Lucid','Zeekr','NETA','ORA','Li Auto','Leapmotor','Voyah','Canoo','Fisker'];
  if(evB.some(b=>brand.includes(b)))pickCarEnergy(document.getElementById('ce-ev'),'ev');
}
function clearBrand(){APP.selectedBrand='';document.getElementById('brand-search-section').style.display='block';document.getElementById('brand-selected-display').style.display='none';document.getElementById('brand-search').value='';filterBrands('');}

// Add Car
const colorMap={'ขาว':'#E8E8E8','ดำ':'#1A1A1A','น้ำเงิน':'#1565C0','แดง':'#E53935','เหลือง':'#F9A825','เทา':'#78909C','ส้ม':'#FF7043'};
let selColor={color:'ขาว',hex:'#E8E8E8'},selEnergy='g91';
function openAddCar(){
  ['car-model-input','car-plate-input'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  selColor={color:'ขาว',hex:'#E8E8E8'};selEnergy='g91';clearBrand();
  document.querySelectorAll('.color-btn').forEach((b,i)=>b.classList.toggle('on',i===0));
  document.querySelectorAll('#car-energy-row .sos-fuel-chip').forEach(c=>c.classList.remove('on'));
  document.getElementById('ce-91').classList.add('on');
  document.getElementById('ev-plug-section').style.display='none';
  initBrandDropdown();
  document.getElementById('addcar-overlay').classList.add('show');
}
function pickColor(el){document.querySelectorAll('.color-btn').forEach(b=>b.classList.remove('on'));el.classList.add('on');selColor={color:el.dataset.color,hex:colorMap[el.dataset.color]||'#E8E8E8'};}
function pickCarEnergy(el,type){document.querySelectorAll('#car-energy-row .sos-fuel-chip').forEach(c=>c.classList.remove('on'));el.classList.add('on');selEnergy=type;document.getElementById('ev-plug-section').style.display=type==='ev'?'block':'none';}
function saveNewCar(){
  const brand=APP.selectedBrand,model=document.getElementById('car-model-input').value,plate=document.getElementById('car-plate-input').value;
  if(!brand||!model||!plate){showToast(T('fillAll'));return;}
  const evPlug=selEnergy==='ev'?document.getElementById('ev-plug').value:'';
  const labels={'g91':'Gasohol 91','g95':'Gasohol 95','diesel':'Diesel B7','ev':'EV · '+evPlug};
  APP.cars.push({brand,model,plate,color:selColor.color,colorHex:selColor.hex,energy:selEnergy,fuelLabel:labels[selEnergy]||selEnergy,year:new Date().getFullYear().toString(),evPlug});
  closeOL('addcar-overlay');renderCars();showToast(Tf('carAdded',{brand,model}));
}

// Topup
function openTopup(){updateBalDisplay();APP.selectedTopupAmt=300;APP.selectedTopupBonus=0;document.getElementById('topup-overlay').classList.add('show');}
function pickAmt(el,amt,bonus){document.querySelectorAll('.tg-opt').forEach(o=>o.classList.remove('on'));el.classList.add('on');APP.selectedTopupAmt=amt;APP.selectedTopupBonus=bonus;const bon=bonus?` (+฿${bonus} ${T('bonus')})`:'';document.getElementById('topup-btn').textContent=`✅ ${LANG==='en'?'Confirm':'ยืนยัน'} ${amt.toLocaleString()} ${T('baht')}${bon}`;}
function pickPM(el){document.querySelectorAll('.pm-chip').forEach(c=>c.classList.remove('on'));el.classList.add('on');}
function doTopup(){
  const total=APP.selectedTopupAmt+APP.selectedTopupBonus;APP.balance+=total;APP.pts+=APP.selectedTopupAmt;
  const bonTxt=APP.selectedTopupBonus?` ${T('bonus')} ฿${APP.selectedTopupBonus}`:'';
  APP.transactions.unshift({type:'topup',icon:'💰',bg:'rgba(30,120,200,.12)',name_th:'เติม PTT Wallet',name_en:'PTT Wallet Top Up',meta_th:`ตอนนี้ · +฿${APP.selectedTopupAmt}${bonTxt}`,meta_en:`Now · +฿${APP.selectedTopupAmt}${bonTxt}`,amt:total});
  closeOL('topup-overlay');updateBalDisplay();renderHomeHistory();
  setTimeout(()=>showToast(`${T('topupSuccess')} ฿${APP.balance.toLocaleString()}`),300);
}

// SOS
function renderSOSOptions(){
  const fo=document.getElementById('sos-fuel-options'),eo=document.getElementById('sos-ev-options');if(!fo)return;
  const fC=APP.cars.filter(c=>c.energy!=='ev'),eC=APP.cars.filter(c=>c.energy==='ev');
  fo.innerHTML=fC.length?fC.map((c,i)=>`<div class="sos-fuel-chip ${i===0?'on':''}" onclick="sosFuelPick(this)"><div class="sfn">${c.fuelLabel}</div><div class="sfp">${c.brand} ${c.model}</div></div>`).join(''):`<div class="sos-fuel-chip on"><div class="sfn">Gasohol 95</div></div>`;
  eo.innerHTML=eC.length?eC.map((c,i)=>`<div class="sos-fuel-chip ${i===0?'on':''}" onclick="sosFuelPick(this)"><div class="sfn">${c.brand} ${c.model}</div><div class="sfp">${c.evPlug||'CCS2'}</div></div>`).join(''):`<div class="sos-fuel-chip on"><div class="sfn">🔌 CCS2</div></div>`;
}
function openSOS(){renderSOSOptions();document.getElementById('sos-call-view').style.display=APP.sosDispatched?'none':'block';document.getElementById('sos-dispatched-view').style.display=APP.sosDispatched?'block':'none';document.getElementById('sos-overlay').classList.add('show');}
function sosSvc(t){document.getElementById('sos-s-fuel').classList.toggle('on',t==='fuel');document.getElementById('sos-s-ev').classList.toggle('on',t==='ev');document.getElementById('sos-fuel-section').style.display=t==='fuel'?'block':'none';document.getElementById('sos-ev-section').style.display=t==='ev'?'block':'none';}
function sosFuelPick(el){const p=el.closest('#sos-fuel-section,#sos-ev-section');if(p)p.querySelectorAll('.sos-fuel-chip').forEach(c=>c.classList.remove('on'));el.classList.add('on');}
function callSOS(){
  const isFuel=document.getElementById('sos-s-fuel').classList.contains('on');
  document.getElementById('sos-dispatched-detail').textContent=isFuel?T('mobileFuelETA'):T('mobileEVETA');
  document.getElementById('sos-call-view').style.display='none';document.getElementById('sos-dispatched-view').style.display='block';
  APP.sosDispatched=true;updateSOSBanner(true);APP.sosCancelSec=60;
  if(APP.sosCancelTimer)clearInterval(APP.sosCancelTimer);
  APP.sosCancelTimer=setInterval(()=>{APP.sosCancelSec--;const cd=document.getElementById('cancel-countdown');if(cd)cd.textContent=APP.sosCancelSec;if(APP.sosCancelSec<=0){clearInterval(APP.sosCancelTimer);const b=document.getElementById('sos-cancel-btn');if(b){b.disabled=true;b.style.opacity='.5';}}},1000);
  let eta=8;if(APP.sosTimer)clearInterval(APP.sosTimer);
  APP.sosTimer=setInterval(()=>{if(eta>0){eta--;['sos-eta-display','sos-eta-min','sos-eta-big'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=id==='sos-eta-display'?eta+':00':eta;}); }},10000);
}
function cancelSOS(){if(APP.sosCancelSec<=0){showToast(T('cancelExpired'));return;}APP.sosDispatched=false;if(APP.sosTimer)clearInterval(APP.sosTimer);if(APP.sosCancelTimer)clearInterval(APP.sosCancelTimer);closeOL('sos-overlay');updateSOSBanner(false);showToast(T('cancelledSOS'));}
function updateSOSBanner(d){
  const b=document.getElementById('home-sos-banner'),title=document.getElementById('home-sos-title'),sub=document.getElementById('home-sos-sub'),feats=document.getElementById('home-sos-feats'),ring=document.getElementById('home-sos-ring');
  if(d){b.className='sos-banner sos-dispatched';title.textContent=LANG==='en'?'🚚 Help is on the way!':'🚚 รถช่วยเหลือกำลังมา!';sub.textContent=LANG==='en'?'Tap to view status':'กดเพื่อดูสถานะ ETA';ring.textContent='🚚';feats.innerHTML=`<div class="sos-feat">✅ Dispatched</div><div class="sos-feat">📍 GPS</div><div class="sos-feat">⏱ ~8 ${T('etaMin')}</div>`;}
  else{b.className='sos-banner sos-active';title.textContent=T('sosTitle');sub.textContent=T('sosSub');ring.textContent='🆘';feats.innerHTML=`<div class="sos-feat">${T('feat1')}</div><div class="sos-feat">${T('feat2')}</div><div class="sos-feat">${T('feat3')}</div>`;}
}

// Energy
let mainPrice=33.25,mainKm=14;
function switchET(typ){document.getElementById('etb-fuel').classList.toggle('on',typ==='fuel');document.getElementById('etb-ev').classList.toggle('on',typ==='ev');document.getElementById('et-fuel').style.display=typ==='fuel'?'block':'none';document.getElementById('et-ev').style.display=typ==='ev'?'block':'none';}
function pickFuel(el,p,name,km){document.querySelectorAll('#fg-main .fuel-chip').forEach(c=>c.classList.remove('on'));el.classList.add('on');mainPrice=parseFloat(p);mainKm=km||14;calcMain();}
function calcMain(){const b=parseFloat(document.getElementById('bi-main').value)||0,l=(b/mainPrice).toFixed(2);document.getElementById('lv-main').textContent=b>0?l:'0.00';document.getElementById('kv-main').textContent='~'+Math.round(parseFloat(l)*mainKm);}
function savePref(){showToast(T('savedPref'));}

// Pump
let pumpPrice=33.25,pumpName='Gasohol 91',pumpKm=14;
function pumpFuel(el,p,name,km){document.querySelectorAll('#pump-fg .fuel-chip').forEach(c=>c.classList.remove('on'));el.classList.add('on');pumpPrice=parseFloat(p);pumpName=name;pumpKm=km||14;calcPump();}
function calcPump(){const b=parseFloat(document.getElementById('pump-budget').value)||0,l=b>0?(b/pumpPrice).toFixed(2):'0.00';document.getElementById('pump-lv').textContent=l;document.getElementById('pump-kv').textContent='~'+Math.round(parseFloat(l)*pumpKm);document.getElementById('pump-screen-val').textContent=pumpName+' — ฿'+b;document.getElementById('pump-screen-sub').textContent='≈ '+l+' '+T('litre')+' · '+pumpPrice+' ฿/'+T('litre');document.getElementById('pv3').textContent=b;}
function savePumpPref(){showToast(T('savedPref'));}
function pumpPay(){const b=parseFloat(document.getElementById('pump-budget').value)||0;if(b<=0){showToast(T('enterBudget'));return;}if(APP.balance<b){showToast(T('insufficientBal'));return;}APP.balance-=b;APP.transactions.unshift({type:'fuel',icon:'⛽',bg:'rgba(60,118,241,.1)',name_th:'เติม '+pumpName+' (Digital Pump)',name_en:'Fill '+pumpName+' (Digital Pump)',meta_th:'ตอนนี้ · หัว A3 · ≈'+(b/pumpPrice).toFixed(2)+'L',meta_en:'Now · Nozzle A3 · ≈'+(b/pumpPrice).toFixed(2)+'L',amt:-b});updateBalDisplay();renderHomeHistory();showToast(T('pumpSuccess'));}

// OTP
let otpVal='',otpTarget='B2';
function openOTP(slot){otpTarget=slot||'B2';otpVal='';renderOTP();document.getElementById('otp-slot-badge').textContent=otpTarget;document.getElementById('otp-slot-name').textContent=(LANG==='en'?'Slot ':'ช่อง ')+otpTarget+' — DC 50kW';document.getElementById('otp-overlay').classList.add('show');}
function otpKey(k){if(k==='del')otpVal=otpVal.slice(0,-1);else if(otpVal.length<6)otpVal+=k;renderOTP();}
function renderOTP(){for(let i=1;i<=6;i++){const el=document.getElementById('od'+i);if(otpVal[i-1]){el.textContent=otpVal[i-1];el.classList.add('filled');}else{el.textContent='_';el.classList.remove('filled');}}}
function confirmOTP(){
  if(otpVal.length!==6){showToast(T('otpFill'));return;}
  // Validate EV check-in policy before unlocking
  const result=validateEVCheckin(otpTarget);
  if(result.ok){
    closeOL('otp-overlay');
    showToast(result.msg||Tf('otpUnlocked',{id:otpTarget}));
    if(result.earlyEntry){
      // Mark slot as early-entry charging
      setTimeout(()=>showToast('⏱ เครื่องเริ่มนับเวลาของคุณก่อนเวลาจองแล้ว'),2500);
    }
  } else {
    closeOL('otp-overlay');
    // Reset slot B3 back to bookable state
    const s=document.getElementById('slot-b3');
    if(s){
      s.className='p-slot reserved';
      s.onclick=()=>slotDetail('B3','reserved','free',0);
      s.innerHTML=`<div class="slot-num-lbl">B3</div><div class="slot-label-sm" data-i18n="bookable">จองได้</div><div class="slot-badge badge-bookable" data-i18n="book">จอง</div>`;
    }
    setTimeout(()=>showToast(result.msg),300);
  }
}

// EV Slot Timers
const slotTimers={W1:{min:29,sec:47},W2:{min:9,sec:12}};
function updateSlotTimers(){
  ['W1','W2'].forEach(id=>{
    const t=slotTimers[id];
    if(t.sec>0)t.sec--;else if(t.min>0){t.min--;t.sec=59;}else{const el=document.getElementById(`slot-${id.toLowerCase()}-timer`);if(el){el.textContent=LANG==='en'?'Free!':'ว่าง!';el.style.color='#A5D6A7';}return;}
    const el=document.getElementById(`slot-${id.toLowerCase()}-timer`);if(el)el.textContent=String(t.min).padStart(2,'0')+':'+String(t.sec).padStart(2,'0');
  });
}
setInterval(updateSlotTimers,1000);

// Slot Detail + B3 Booking
function slotDetail(id,type,status,mins){
  let content='';
  if(type==='walkin'&&status==='countdown'){
    content=`<div class="m-title">${Tf('walkinTitle',{id})}</div>
    <div class="m-sub">${T('walkinCharging')}</div>
    <div style="text-align:center;padding:20px;background:var(--surface2);border-radius:var(--r);margin-bottom:12px;">
      <div style="font-family:'Prompt',sans-serif;font-size:44px;font-weight:800;color:var(--green);">${String(mins).padStart(2,'0')}:00</div>
      <div style="font-size:11px;color:var(--text2);margin-top:4px;">${T('minLeft')}</div>
    </div>
    <div class="info-banner">${T('walkinNote')}</div>
    <button class="sec-btn" onclick="closeOL('slot-overlay')">${T('closeBtn')}</button>`;
  } else if(type==='reserved'&&status==='free'){
    if(APP.b3Booked){
      content=`<div class="m-title">${Tf('alreadyBooked',{id})}</div>
      <div class="m-sub">${T('bookingConfirmed')}</div>
      <div style="text-align:center;padding:16px;background:var(--green-light);border-radius:var(--r);margin-bottom:12px;">
        <div style="font-size:36px;">✅</div>
        <div style="font-family:'Prompt',sans-serif;font-size:15px;font-weight:800;color:var(--green);margin-top:6px;">${Tf('bookSuccessMsg',{id})}</div>
        <div style="font-size:11px;color:var(--green);margin-top:4px;">${APP.b3BookingDate} · ${APP.b3BookingTime}</div>
      </div>
      <button class="confirm-btn" onclick="openOTP('B3');closeOL('slot-overlay')">${T('checkinOTPBtn')}</button>
      <button class="sec-btn" onclick="closeOL('slot-overlay')">${T('closeBtn')}</button>`;
    } else {
      content=`<div class="m-title">${Tf('slotAvail',{id})}</div>
      <div class="m-sub">DC Fast 50kW · CCS2/CHAdeMO/GB/T · 8.5฿/kWh</div>
      <div style="text-align:center;padding:16px;background:rgba(60,118,241,.06);border-radius:var(--r);margin-bottom:12px;border:1.5px solid rgba(60,118,241,.2);">
        <div style="font-size:36px;">⚡</div>
        <div style="font-family:'Prompt',sans-serif;font-size:16px;font-weight:800;color:var(--p500);margin-top:6px;">${T('slotReady')}</div>
        <div style="font-size:11px;color:var(--text2);margin-top:3px;">Ground Lock · OTP Unlock</div>
      </div>
      <button class="confirm-btn" onclick="closeOL('slot-overlay');openB3Booking()">${Tf('bookNow',{id})}</button>
      <button class="sec-btn" onclick="closeOL('slot-overlay')">${T('closeBtn')}</button>`;
    }
  }
  document.getElementById('slot-detail-content').innerHTML=content;
  document.getElementById('slot-overlay').classList.add('show');
}
function openB3Booking(){
  const dayNames=LANG==='en'?['Sun','Mon','Tue','Wed','Thu','Fri','Sat']:['อา','จ','อ','พ','พฤ','ศ','ส'];
  const months=LANG==='en'?['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']:['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
  const today=new Date();let dateHtml='';
  for(let i=0;i<5;i++){
    const d=new Date(today);d.setDate(today.getDate()+i);
    const label=i===0?T('todayDate'):dayNames[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()];
    const val=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    dateHtml+=`<div class="time-slot ${i===0?'on':''}" style="min-width:68px;white-space:nowrap;padding:7px 6px;" onclick="pickEvDate(this,'${val}')">${label}</div>`;
  }
  document.getElementById('ev-date-row').innerHTML=dateHtml;
  APP.selEvDate=today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  const times=['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
  const taken=['09:00','12:00','15:00','16:00','19:00'];
  const fullTxt=LANG==='en'?'Full':'เต็ม';
  document.getElementById('ev-time-grid').innerHTML=times.map(t=>`<div class="time-slot ${taken.includes(t)?'taken':''}" ${!taken.includes(t)?`onclick="pickEvTime(this,'${t}')"`:''}>${t}${taken.includes(t)?'<br><span style="font-size:8px;">'+fullTxt+'</span>':''}</div>`).join('');
  APP.selEvTime='';
  document.getElementById('evbook-overlay').classList.add('show');
}
function pickEvDate(el,val){document.querySelectorAll('#ev-date-row .time-slot').forEach(d=>d.classList.remove('on'));el.classList.add('on');APP.selEvDate=val;}
function pickEvTime(el,val){if(el.classList.contains('taken'))return;document.querySelectorAll('#ev-time-grid .time-slot:not(.taken)').forEach(t=>t.classList.remove('on'));el.classList.add('on');APP.selEvTime=val;updatePenaltyDisplay();}
function pickEvPlug(el){document.querySelectorAll('#ev-plug-row .sos-fuel-chip').forEach(c=>c.classList.remove('on'));el.classList.add('on');}
function confirmB3Booking(){
  if(!APP.selEvTime){showToast(T('selectTime2'));return;}
  APP.b3Booked=true;APP.b3BookingTime=APP.selEvTime;APP.b3BookingDate=APP.selEvDate;
  closeOL('evbook-overlay');
  const s=document.getElementById('slot-b3');
  if(s){
    s.className='p-slot reserved-mine';
    s.onclick=()=>openOTP('B3');
    s.innerHTML=`<div class="slot-num-lbl">B3</div><svg class="slot-car-svg" viewBox="0 0 60 26" fill="none"><rect x="2" y="10" width="56" height="12" rx="4" fill="rgba(60,118,241,.6)" stroke="#90B4FF" stroke-width="1.5"/><rect x="8" y="4" width="44" height="10" rx="4" fill="rgba(60,118,241,.6)" stroke="#90B4FF" stroke-width="1.5"/><circle cx="13" cy="22" r="3.5" fill="#1A237E"/><circle cx="13" cy="22" r="1.8" fill="#7986CB"/><circle cx="47" cy="22" r="3.5" fill="#1A237E"/><circle cx="47" cy="22" r="1.8" fill="#7986CB"/></svg><div class="slot-label-sm">⭐ ${T('mine')}</div><div class="slot-label-sm">${APP.b3BookingTime}</div><div class="slot-badge badge-reserved">${T('booked')}</div>`;
  }
  showToast(`${T('b3BookedMsg')} ${APP.b3BookingDate} ${APP.b3BookingTime}`);
}

// Toast
function showToast(msg){const d=document.createElement('div');d.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#001B4B;color:#fff;padding:9px 18px;border-radius:12px;font-size:11px;font-weight:600;z-index:999;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,.3);animation:fadeUp .25s ease;max-width:340px;text-align:center;';d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),3000);}

// ══════ STATION BOTTOM SHEET ══════
function starsHTML(r){
  let h='';const full=Math.floor(r),half=(r-full)>=0.5;
  for(let i=0;i<5;i++){if(i<full)h+='<span class="star-filled">★</span>';else if(i===full&&half)h+='<span style="position:relative;display:inline-block;"><span class="star-filled" style="position:absolute;overflow:hidden;width:50%;">★</span><span class="star-empty">★</span></span>';else h+='<span class="star-empty">★</span>';}
  return h;
}
function openSBS(id){
  const s=APP.stations.find(x=>x.id===id);if(!s)return;
  if(!document.getElementById('inline-sbs'))return;
  APP._sbsStation=id;
  const isOpen=s.status==='open';
  const statusTxt=isOpen?(LANG==='th'?'เปิดอยู่':'Open'):(LANG==='th'?'คิวรอ':'Queue');
  const queueTxt=LANG==='th'?'เวลารอคิว':'Queue Time';
  const queueUnit=LANG==='th'?'นาที':'min';
  const noQueueTxt=LANG==='th'?'ไม่มีคิว':'No Queue';
  const evAvailTxt=LANG==='th'?'ว่าง':'Free';
  const evFullTxt=LANG==='th'?'เต็ม':'Full';
  const navTxt=LANG==='th'?'🗺️ นำทาง':'🗺️ Navigate';
  const bookTxt=LANG==='th'?'📅 จองพลังงาน':'📅 Book Energy';
  const fuelTypeTxt=LANG==='th'?'น้ำมัน':'Fuels';
  const shopsTxt=LANG==='th'?'ร้านค้า':'Shops';
  const hoursTxt=LANG==='th'?'เวลาทำการ':'Hours';
  const evTxt=LANG==='th'?'EV ชาร์จเจอร์':'EV Chargers';
  const distTxt=LANG==='th'?'ห่างจากคุณ':'from you';

  // Photos
  const photosHTML=s.photos.map((emoji,i)=>`
    <div class="sbs-photo" style="background:linear-gradient(135deg,${s.colors[i]||'#1565C0'},${s.colors[(i+1)%3]||'#0D47A1'});">
      <div style="font-size:36px;z-index:1;">${emoji}</div>
      <div class="sbs-photo-overlay"></div>
      ${i===0?`<div class="sbs-dist-badge">📍 ${s.dist} ${distTxt}</div>`:''}
    </div>`).join('');
  document.getElementById('isbs-photos').innerHTML=photosHTML;

  // EV section
  let evSection='';
  if(s.type!=='fuel'&&s.ev){
    const free=s.evFree||0,total=s.evTotal||0;
    const availColor=free>0?'var(--green)':'var(--orange)';
    const availTxt=free>0?`${free}/${total} ${evAvailTxt}`:evFullTxt;
    evSection=`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);">
      <div class="sbs-ev-icon">⚡</div>
      <div class="sbs-ev-info"><div class="sbs-ev-name">${s.evPower||s.ev}</div><div class="sbs-ev-sub">${s.ev}</div></div>
      <div style="text-align:right;font-family:'Prompt',sans-serif;font-size:16px;font-weight:800;color:${availColor};">${free}<span style="font-size:9px;color:var(--text3);">/${total}</span></div>
    </div>`;
  }

  // Fuel pills
  let fuelHtml='';
  if(s.fuels&&s.fuels.length>0){
    fuelHtml=`<div style="margin-top:8px;"><div class="sbs-section-title" style="margin-bottom:5px;">${fuelTypeTxt}</div><div class="sbs-fuel-chips">${s.fuels.map(f=>`<div class="sbs-fuel-pill">⛽ ${f}</div>`).join('')}</div></div>`;
  }

  // Shops
  const shopHtml=`<div style="margin-top:8px;"><div class="sbs-section-title" style="margin-bottom:5px;">${shopsTxt}</div><div class="sbs-shop-row">${s.shops.map(sh=>`<div class="sbs-shop-pill">${sh}</div>`).join('')}</div></div>`;

  const queueVal=s.queueTime>0?`${s.queueTime} ${queueUnit}`:`<span style="color:var(--green);">${noQueueTxt}</span>`;
  const queueEmoji=s.queueTime===0?'✅':s.queueTime<=5?'🟢':s.queueTime<=15?'🟡':'🔴';

  document.getElementById('isbs-body').innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
      <div style="flex:1;">
        <div class="sbs-name">${sName(s)}</div>
        <div class="sbs-addr">📍 ${sAddr(s)}</div>
      </div>
      <button onclick="closeInlineSBS()" style="background:var(--surface2);border:none;border-radius:50%;width:28px;height:28px;font-size:13px;cursor:pointer;color:var(--text2);flex-shrink:0;display:flex;align-items:center;justify-content:center;">✕</button>
    </div>
    <div class="sbs-meta-row">
      <span class="sbs-rating-num">${s.rating}</span>
      <span class="sbs-rating-stars">${starsHTML(s.rating)}</span>
      <span class="sbs-review-cnt">(${s.reviews.toLocaleString()})</span>
      <span class="${isOpen?'sbs-status-open':'sbs-status-busy'}">${statusTxt}</span>
      <span style="font-size:10px;">${queueEmoji} ${queueVal}</span>
    </div>
    <div style="font-size:11px;color:var(--text2);margin-bottom:8px;">🕐 ${LANG==='th'?s.hours:s.hours_en}</div>
    ${evSection}${fuelHtml}${shopHtml}`;

  document.getElementById('isbs-actions').innerHTML=`
    <button class="sbs-nav-btn" onclick="navToStation('${s.id}');closeInlineSBS();">${navTxt}</button>
    <button class="sbs-book-btn" onclick="goTo('v-energy');closeInlineSBS();">${bookTxt}</button>`;

  // Shrink map zone, expand sheet
  const sheet=document.getElementById('inline-sbs');
  const listZone=document.getElementById('map-list-zone');
  sheet.style.maxHeight='480px';
  listZone.style.maxHeight='0';
  listZone.style.overflow='hidden';
  // Let map resize after transition
  setTimeout(()=>{if(APP.map)APP.map.invalidateSize();},380);
}

// ══════ EV CHECK-IN POLICY SYSTEM ══════
// Rules:
//   - มาก่อน 5 นาที (ไม่มีคนจอง) → เข้าได้เลย เครื่องเริ่มนับก่อน
//   - มาสายไม่เกิน 5 นาที → เข้าได้ ไม่มีค่าปรับ
//   - มาสายเกิน 5 นาที → หัก ฿20 คิวหลุดทันที ต้องจองใหม่
function updatePenaltyDisplay(){
  const penaltySection=document.getElementById('penalty-fee-section');
  if(!penaltySection)return;
  
  if(APP.selEvTime){
    penaltySection.style.display='block';
    
    // Parse booking time
    const [hour,minute]=APP.selEvTime.split(':').map(Number);
    const bookingTime=new Date();
    bookingTime.setHours(hour,minute,0);
    
    // Early window: 5 min before (no-one booked → can enter)
    const earlyTime=new Date(bookingTime);
    earlyTime.setMinutes(earlyTime.getMinutes()-5);
    // Late grace: 5 min after booking time still ok
    const lateGrace=new Date(bookingTime);
    lateGrace.setMinutes(lateGrace.getMinutes()+5);
    
    const formatTime=(d)=>String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
    
    const bookingDisplay=document.getElementById('penalty-booking-time');
    const safeRangeDisplay=document.getElementById('penalty-safe-range');
    const feeDisplay=document.getElementById('penalty-fee-amount');
    
    if(bookingDisplay)bookingDisplay.textContent=APP.selEvTime+' น.';
    // Safe range shown: -5min to +5min from booking
    if(safeRangeDisplay)safeRangeDisplay.textContent=formatTime(earlyTime)+' – '+formatTime(lateGrace);
    // Fixed penalty fee
    if(feeDisplay)feeDisplay.textContent='฿20';
  }else{
    penaltySection.style.display='none';
  }
}

// Simulate EV check-in validation (called when user tries to check-in via OTP)
function validateEVCheckin(slotId){
  if(!APP.b3Booked||!APP.b3BookingTime) return {ok:true,earlyEntry:false};
  const [h,m]=APP.b3BookingTime.split(':').map(Number);
  const now=new Date();
  const booked=new Date(); booked.setHours(h,m,0,0);
  const diffMin=(now-booked)/60000; // positive = late, negative = early
  
  if(diffMin < -5){
    // More than 5 min early — can only enter if slot is free (no other booking)
    return {ok:true, earlyEntry:true, msg:'⚡ มาก่อนเวลา 5 นาที — เครื่องเริ่มนับเวลาก่อนเลย!'};
  } else if(diffMin <= 5){
    // On time or within 5 min late grace
    return {ok:true, earlyEntry:false, msg:'✅ เข้าชาร์จได้เลย!'};
  } else {
    // Over 5 min late → penalty + queue dropped
    APP.b3Booked=false; APP.b3BookingTime=''; APP.b3BookingDate='';
    APP.balance=Math.max(0,APP.balance-20);
    APP.transactions.unshift({type:'ev',icon:'⚠️',bg:'rgba(232,25,44,.1)',
      name_th:'ค่าธรรมเนียมมาสาย EV',name_en:'EV Late Penalty',
      meta_th:'คิวหลุด — ต้องจองใหม่',meta_en:'Queue expired — rebook required',amt:-20});
    updateBalDisplay(); renderHomeHistory();
    return {ok:false, msg:'❌ มาสายเกิน 5 นาที — หัก ฿20 คิวหลุดแล้ว กรุณาจองใหม่'};
  }
}

function closeInlineSBS(){
  try{
    const sheet=document.getElementById('inline-sbs');
    const listZone=document.getElementById('map-list-zone');
    if(!sheet||!listZone)return;
    sheet.style.maxHeight='0';
    listZone.style.maxHeight='200px';
    listZone.style.overflow='auto';
    APP._sbsStation=null;
    setTimeout(()=>{if(APP.map)APP.map.invalidateSize();},380);
  }catch(e){}
}

// ════════════════════════════════════════
// ✅ PROFILE NAME EDIT
// ════════════════════════════════════════
let userProfileName = localStorage.getItem('ptt_profile_name') || 'สมชาย รักสะอาด';
function editProfileName(){
  const modal=document.getElementById('name-edit-modal');
  const input=document.getElementById('name-edit-input');
  if(modal && input){
    input.value=userProfileName;
    modal.style.display='flex';
    input.focus();
    input.select();
  }
}
function closeNameEdit(){
  const modal=document.getElementById('name-edit-modal');
  if(modal) modal.style.display='none';
}
function saveProfileName(){
  const input=document.getElementById('name-edit-input');
  if(!input) return;
  const newName=input.value.trim();
  if(newName.length===0){showToast(T('nameRequired')||'กรุณากรอกชื่อ');return;}
  userProfileName=newName;
  localStorage.setItem('ptt_profile_name',newName);
  document.getElementById('profile-name-display').textContent=newName;
  document.querySelector('.profile-info-card .pi-value').textContent=newName;
  closeNameEdit();
  showToast('✅ บันทึกชื่อสำเร็จ');
}
document.addEventListener('DOMContentLoaded',()=>{
  const displayEl=document.getElementById('profile-name-display');
  if(displayEl) displayEl.textContent=userProfileName;
  const infoEl=document.querySelector('.profile-info-card .pi-value');
  if(infoEl) infoEl.textContent=userProfileName;
});

// ════════════════════════════════════════
// 📅 FUEL BOOKING
// ════════════════════════════════════════
function bookFuelConfirm(){
  const budget=parseFloat(document.getElementById('bi-main').value)||0;
  if(budget<=0){
    showToast('❌ กรุณาระบุวงเงิน');
    return;
  }
  const selectedFuel=document.querySelector('#fg-main .fuel-chip.on');
  const fuelName=selectedFuel?selectedFuel.textContent:'ไม่ระบุ';
  const branch='พหลโยธิน-วังหิน';
  
  const booking=addBooking('fuel',branch,`เชื้อเพลิง: ${fuelName} · วงเงิน: ฿${budget}`);
  showToast(`✅ ${T('bookSuccess')||'จองสำเร็จ'}`);
}
// ════════════════════════════════════════
// 💳 PUMP BOOKING (Digital Pump)
// ════════════════════════════════════════
function pumpPayConfirm(){
  const b=parseFloat(document.getElementById('pump-budget').value)||0;
  if(b<=0){showToast(T('enterBudget'));return;}
  if(APP.balance<b){showToast(T('insufficientBal'));return;}
  
  const booking=addBooking('pump','PTT (Digital Pump)',`เชื้อเพลิง: ${pumpName} · วงเงิน: ฿${b} · ความจุประมาณ ${(b/pumpPrice).toFixed(2)}L`);
  APP.balance-=b;
  APP.transactions.unshift({type:'fuel',icon:'⛽',bg:'rgba(60,118,241,.1)',name_th:'เติม '+pumpName+' (Digital Pump)',name_en:'Fill '+pumpName+' (Digital Pump)',meta_th:'ตอนนี้ · หัว A3 · ≈'+(b/pumpPrice).toFixed(2)+'L',meta_en:'Now · Nozzle A3 · ≈'+(b/pumpPrice).toFixed(2)+'L',amt:-b});
  updateBalDisplay();
  renderHomeHistory();
  showToast(T('pumpSuccess'));
}
// ════════════════════════════════════════
// 🔌 EV BOOKING
// ════════════════════════════════════════
function evSlotBook(slotId){
  const booking=addBooking('ev','PTT พหลโยธิน (DC 50kW)',`ช่อง: ${slotId} · เวลา: 14:00 น.`);
  showToast(`✅ จองช่อง ${slotId} สำเร็จ`);
}

// ════════════════════════════════════════
let myBookings=JSON.parse(localStorage.getItem('ptt_bookings'))||[];
function addBooking(type,station,details){
  const now=new Date();
  const booking={
    id:Date.now(),
    type:type, // 'fuel','ev','pump'
    station:station,
    details:details,
    dateAdded:now.toLocaleString('th-TH'),
    dateTime:now.toISOString()
  };
  myBookings.unshift(booking);
  localStorage.setItem('ptt_bookings',JSON.stringify(myBookings));
  renderMyBookings();
  return booking;
}
function renderMyBookings(){
  const container=document.getElementById('my-bookings-list');
  const noMsg=document.getElementById('no-bookings-msg');
  if(!container) return;
  
  if(myBookings.length===0){
    container.innerHTML='';
    if(noMsg) noMsg.style.display='block';
    return;
  }
  
  if(noMsg) noMsg.style.display='none';
  
  let html=myBookings.slice(0,5).map(b=>{
    const icon=b.type==='fuel'?'⛽':b.type==='pump'?'💳':'🔌';
    const typeLabel=b.type==='fuel'?'จองน้ำมัน':b.type==='pump'?'เติมผ่าน Wallet':'ชาร์จ EV';
    return `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 12px;display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
        <div style="flex:1;">
          <div style="font-size:11px;font-weight:700;color:var(--text);">${icon} ${typeLabel}</div>
          <div style="font-size:10px;color:var(--text2);margin-top:2px;">${b.station}</div>
          <div style="font-size:9px;color:var(--text3);margin-top:2px;">${b.details}</div>
          <div style="font-size:9px;color:var(--text3);margin-top:3px;">📅 ${b.dateAdded}</div>
        </div>
        <button onclick="addToCalendar(${b.id})" style="background:rgba(27,93,201,.2);border:1px solid rgba(27,93,201,.4);border-radius:6px;padding:4px 8px;font-size:11px;cursor:pointer;color:var(--p500);font-weight:600;white-space:nowrap;">📌 ปฏิทิน</button>
      </div>
    `;
  }).join('');
  
  container.innerHTML=html;
}

// ════════════════════════════════════════
// 🕐 REAL-TIME DATE & TIME
// ════════════════════════════════════════
function updateRealtimeClock(){
  const now=new Date();
  const options={year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false};
  const timeStr=now.toLocaleString('th-TH',options);
  
  // Update any elements with class 'realtime-clock'
  document.querySelectorAll('.realtime-clock').forEach(el=>{
    el.textContent=timeStr;
  });
}
// Update clock every second
setInterval(updateRealtimeClock,1000);
updateRealtimeClock();

// ════════════════════════════════════════
// 📌 ADD TO CALENDAR
// ════════════════════════════════════════
function addToCalendar(bookingId){
  const booking=myBookings.find(b=>b.id===bookingId);
  if(!booking) return;
  
  const date=new Date(booking.dateTime);
  const startTime=date.toISOString().split('T')[0];
  const endTime=new Date(date.getTime()+3600000).toISOString().split('T')[0];
  
  const typeLabel=booking.type==='fuel'?'จองน้ำมัน':booking.type==='pump'?'เติมผ่าน Wallet':'ชาร์จ EV';
  const title=encodeURIComponent(`${typeLabel} - ${booking.station}`);
  const description=encodeURIComponent(`รายละเอียด: ${booking.details}`);
  
  // Google Calendar format
  const gcalUrl=`https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=${startTime}/${endTime}&details=${description}`;
  
  // Fallback: copy to clipboard
  const calendarText=`${typeLabel}\nสถานที่: ${booking.station}\nรายละเอียด: ${booking.details}\nวันเวลา: ${booking.dateAdded}`;
  navigator.clipboard.writeText(calendarText).then(()=>{
    showToast('✅ คัดลอกไปยังคลิปบอร์ด\n(วางเข้าปฏิทินของคุณได้)');
  }).catch(()=>{
    window.open(gcalUrl,'_blank');
  });
}

document.getElementById('map-toggle').addEventListener('click', function() {
  const mapView = document.getElementById('v-map');
  if (mapView) {
    mapView.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    mapView.scrollIntoView({ behavior: 'smooth' });
  }
});
