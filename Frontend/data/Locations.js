const location = [
  ["1", "Ahmedabad", "Gujarat"],
  ["2", "Surat", "Gujarat"],
  ["3", "Vadodra", "Gujarat"],
  ["4", "Rajkot", "Gujarat"],
  ["5", "Bhavnagar", "Gujarat"],
  ["6", "Jamnagar", "Gujarat"],
  ["7", "Junagadh", "Gujarat"],
  ["8", "Gandhinagar", "Gujarat"],
  ["9", "Gandhidam", "Gujarat"],
  ["10", "Anand", "Gujarat"],
  ["11", "Navsari", "Gujarat"],
  ["12", "Nadiad", "Gujarat"],
  ["13", "Bharuch", "Gujarat"],
  ["14", "Mehsana", "Gujarat"],
  ["15", "Bhuj", "Gujarat"],
  ["16", "Porbandar", "Gujarat"],
  ["17", "Valsad", "Gujarat"],
  ["18", "Vapi", "Gujarat"],
  ["19", "Somnath", "Gujarat"],
  ["20", "Patan", "Gujarat"],
  ["21", "Jodhpur", "Rajasthan"],
  ["22", "Jaipur", "Rajasthan"],
  ["23", "Kota", "Rajasthan"],
  ["24", "Bhiwadi", "Rajasthan"],
  ["25", "Bikaner", "Rajasthan"],
  ["26", "Udaipur", "Rajasthan"],
  ["27", "Ajmer", "Rajasthan"],
  ["28", "Bhilwar", "Rajasthan"],
  ["29", "Alwar", "Rajasthan"],
  ["30", "Sikar", "Rajasthan"],
  ["31", "Bharatpur", "Rajasthan"],
  ["32", "Pali", "Rajasthan"],
  ["33", "Sri", "Ganganagar", "Rajasthan"],
  ["34", "Hanumangarh", "Rajasthan"],
  ["35", "Beawar", "Rajasthan"],
  ["36", "Pune", "Maharashtra"],
  ["37", "Nagpur", "Maharashtra"],
  ["38", "Nashik", "Maharashtra"],
  ["39", "Thane", "Maharashtra"],
  ["40", "Aurangabad", "Maharashtra"],
  ["41", "Solapur", "Maharashtra"],
  ["42", "Jalgaon", "Maharashtra"],
  ["43", "Amravati", "Maharashtra"],
  ["44", "Kolhapur", "Maharashtra"],
  ["45", "Ulhasnagar", "Maharashtra"],
  ["46", "Malegaon", "Maharashtra"],
  ["47", "Latur", "Maharashtra"],
  ["48", "Dhule", "Maharashtra"],
  ["49", "Ahmednagar", "Maharashtra"],
  ["50", "Miraj", "Maharashtra"],
  ["51", "Chandrapur", "Maharashtra"],
  ["52", "Jalna", "Maharashtra"],
  ["53", "Navi", "Mumbai", "Maharashtra"],
  ["54", "Satara", "Maharashtra"],
  ["55", "Kamptee", "Maharashtra"],
  ["56", "Gondia", "Maharashtra"],
  ["57", "Achlapur", "Maharashtra"],
  ["58", "Nandurbar", "Maharashtra"],
  ["59", "Wardha", "Maharashtra"],
  ["60", "Hingaghat", "Maharashtra"],
  ["61", "Dhar", "Karnataka"],
  ["62", "Hubballi-Dharwad", "Karnataka"],
  ["63", "Mysuru", "Karnataka"],
  ["64", "Kalaburagi", "Karnataka"],
  ["65", "Mangaluru", "Karnataka"],
  ["66", "Belagavi", "Karnataka"],
  ["67", "Ballari", "Karnataka"],
  ["68", "Vijayapura", "Karnataka"],
  ["69", "Shivamogga", "Karnataka"],
  ["70", "Raichur", "Karnataka"],
  ["71", "Bidar", "Karnataka"],
  ["72", "Hospet", "Karnataka"],
  ["73", "Robertsonpet", "Karnataka"],
  ["74", "Hassan", "Karnataka"],
  ["75", "Bhadravati", "Karnataka"],
  ["76", "Chitradurga", "Karnataka"],
  ["77", "Udupi", "Karnataka"],
  ["78", "Kolar", "Karnataka"],
  ["79", "Mandya", "Karnataka"],
  ["80", "Chikmagalur", "Karnataka"],
  ["81", "Gangavati", "Karnataka"],
  ["82", "Ranebennuru", "Karnataka"],
  ["83", "Kasaragod", "Kerala"],
  ["84", "Kannur", "Kerala"],
  ["85", "Alappuza", "Kerala"],
  ["86", "Ernakulam", "Kerala"],
  ["87", "Idukki", "Kerala"],
  ["88", "Kollam", "Kerala"],
  ["89", "Kottayam", "Kerala"],
  ["90", "Kozikode", "Kerala"],
  ["91", "Malappuram", "Kerala"],
  ["92", "Palakkad", "Kerala"],
  ["93", "Pathanamthitta", "Kerala"],
  ["94", "Thiruvananthapuram", "Kerala"],
  ["95", "Thrissur", "Kerala"],
  ["96", "Wayanad", "Kerala"],
  ["97", "Coimbatore", "Tamil", "Nadu"],
  ["98", "Madurai", "Tamil", "Nadu"],
  ["99", "Tiruchirappalli", "Tamil", "Nadu"],
  ["100", "Tiruppur", "Tamil", "Nadu"],
  ["101", "Salem", "Tamil", "Nadu"],
  ["102", "Erode", "Tamil", "Nadu"],
  ["103", "Vellore", "Tamil", "Nadu"],
  ["104", "Thoothukkudi", "Tamil", "Nadu"],
  ["105", "Dindigul", "Tamil", "Nadu"],
  ["106", "Thanjavur", "Tamil", "Nadu"],
  ["107", "Ranipet", "Tamil", "Nadu"],
  ["108", "Karur", "Tamil", "Nadu"],
  ["109", "Nagercoil", "Tamil", "Nadu"],
  ["110", "Kanchipuram", "Tamil", "Nadu"],
  ["111", "Karaikkudi", "Tamil", "Nadu"],
  ["112", "Neyveli", "Tamil", "Nadu"],
  ["113", "Cuddalore", "Tamil", "Nadu"],
  ["114", "Tiruvannamalai", "Tamil", "Nadu"],
  ["115", "Pollachi", "Tamil", "Nadu"],
  ["116", "Pudukkottai", "Tamil", "Nadu"],
  ["117", "Vaniyambadi", "Tamil", "Nadu"],
  ["118", "Ambur", "Tamil", "Nadu"],
  ["119", "Nagapattinam", "Tamil", "Nadu"],
  ["120", "Visakhapatnam", "Andhra", "Pradesh"],
  ["121", "Vijayawada", "Andhra", "Pradesh"],
  ["122", "Guntur", "Andhra", "Pradesh"],
  ["123", "Nellore", "Andhra", "Pradesh"],
  ["124", "Kurnool", "Andhra", "Pradesh"],
  ["125", "Kakinada", "Andhra", "Pradesh"],
  ["126", "Kadapa", "Andhra", "Pradesh"],
  ["127", "Tirupati", "Andhra", "Pradesh"],
  ["128", "Anantapuram", "Andhra", "Pradesh"],
  ["129", "Vizianagaram", "Andhra", "Pradesh"],
  ["130", "Eluru", "Andhra", "Pradesh"],
  ["131", "Nadyal", "Andhra", "Pradesh"],
  ["132", "Ongole", "Andhra", "Pradesh"],
  ["133", "Adoni", "Andhra", "Pradesh"],
  ["134", "Madanapalle", "Andhra", "Pradesh"],
  ["135", "Machilipatnam", "Andhra", "Pradesh"],
  ["136", "Tenali", "Andhra", "Pradesh"],
  ["137", "Proddatur", "Andhra", "Pradesh"],
  ["138", "Chittor", "Andhra", "Pradesh"],
  ["139", "Hindupur", "Andhra", "Pradesh"],
  ["140", "Srikakulam", "Andhra", "Pradesh"],
  ["141", "Bhimavaram", "Andhra", "Pradesh"],
  ["142", "Gudivada", "Andhra", "Pradesh"],
  ["143", "Guntakal", "Andhra", "Pradesh"],
  ["144", "Dharamavaram", "Andhra", "Pradesh"],
  ["145", "Tadipatri", "Andhra", "Pradesh"],
  ["146", "Mangalagiri", "Andhra", "Pradesh"],
  ["147", "Warangal", "Telangana"],
  ["148", "Nizamabad", "Telangana"],
  ["149", "Khammam", "Telangana"],
  ["150", "Karimnagar", "Telangana"],
  ["151", "Ramagundam", "Telangana"],
  ["152", "Mahabubnagar", "Telangana"],
  ["153", "Nalgonda", "Telangana"],
  ["154", "Adilabad", "Telangana"],
  ["155", "Suryapet", "Telangana"],
  ["156", "Siddipet", "Telangana"],
  ["157", "Miryalaguda", "Telangana"],
  ["158", "Jagtial", "Telangana"],
  ["159", "Indore", "Madhya", "Pradesh"],
  ["160", "Bhopal", "Madhya", "Pradesh"],
  ["161", "Jablapur", "Madhya", "Pradesh"],
  ["162", "Gwalior", "Madhya", "Pradesh"],
  ["163", "Ujjain", "Madhya", "Pradesh"],
  ["164", "Sagar", "Madhya", "Pradesh"],
  ["165", "Dewas", "Madhya", "Pradesh"],
  ["166", "Satna", "Madhya", "Pradesh"],
  ["167", "Ratlam", "Madhya", "Pradesh"],
  ["168", "Rewa", "Madhya", "Pradesh"],
  ["169", "Murwara", "Madhya", "Pradesh"],
  ["170", "Singrauli", "Madhya", "Pradesh"],
  ["171", "Burhanpur", "Madhya", "Pradesh"],
  ["172", "Khandwa", "Madhya", "Pradesh"],
  ["173", "Bhind", "Madhya", "Pradesh"],
  ["174", "Chhindwara", "Madhya", "Pradesh"],
  ["175", "Guna", "Madhya", "Pradesh"],
  ["176", "Shivpur", "Madhya", "Pradesh"],
  ["177", "Vidisha", "Madhya", "Pradesh"],
  ["178", "Chhatarpur", "Madhya", "Pradesh"],
  ["179", "Damoh", "Madhya", "Pradesh"],
  ["180", "Mandsaur", "Madhya", "Pradesh"],
  ["181", "Khargone", "Madhya", "Pradesh"],
  ["182", "Neemuch", "Madhya", "Pradesh"],
  ["183", "Pithapur", "Madhya", "Pradesh"],
  ["184", "Narmadapuram", "Madhya", "Pradesh"],
  ["185", "Itarsi", "Madhya", "Pradesh"],
  ["186", "Sehore", "Madhya", "Pradesh"],
  ["187", "Morena", "Madhya", "Pradesh"],
  ["188", "Betul", "Madhya", "Pradesh"],
  ["189", "Seoni", "Madhya", "Pradesh"],
  ["190", "Datia", "Madhya", "Pradesh"],
  ["191", "Nagda", "Madhya", "Pradesh"],
  ["192", "Dindori", "Madhya", "Pradesh"],
  ["193", "Raipur", "Chhattisgarh"],
  ["194", "Durg", "Chhattisgarh"],
  ["195", "Rajnandgaon", "Chhattisgarh"],
  ["196", "Raigarh", "Chhattisgarh"],
  ["197", "Korba", "Chhattisgarh"],
  ["198", "Jagdalpur", "Chhattisgarh"],
  ["199", "Dhamtari", "Chhattisgarh"],
  ["200", "Chirmiri", "Chhattisgarh"],
  ["201", "Bilaspur", "Chhattisgarh"],
  ["202", "Bhilai", "Chhattisgarh"],
  ["203", "Ambikapur", "Chhattisgarh"],
  ["204", "Mahasamund", "Chhattisgarh"],
  ["205", "Koriya", "Chhattisgarh"],
  ["206", "Bhubaneshwar", "Odisha"],
  ["207", "Cuttack", "Odisha"],
  ["208", "Rourkela", "Odisha"],
  ["209", "Berhampur", "Odisha"],
  ["210", "Samalpur", "Odisha"],
  ["211", "Puri", "Odisha"],
  ["212", "Balasore", "Odisha"],
  ["213", "Bhadrak", "Odisha"],
  ["214", "Baripada", "Odisha"],
  ["215", "Kolkata", "West", "Bengal"],
  ["216", "Asansol", "West", "Bengal"],
  ["217", "Siliguri", "West", "Bengal"],
  ["218", "Durgapur", "West", "Bengal"],
  ["219", "Bardhaman", "West", "Bengal"],
  ["220", "Malda", "City", "West", "Bengal"],
  ["221", "Baharampur", "West", "Bengal"],
  ["222", "Shantipur", "West", "Bengal"],
  ["223", "Ranaghat", "West", "Bengal"],
  ["224", "Haldia", "West", "Bengal"],
  ["225", "Krishnanagar", "West", "Bengal"],
  ["226", "Jalpaiguri", "West", "Bengal"],
  ["227", "Balurghat", "West", "Bengal"],
  ["228", "Bankura", "West", "Bengal"],
  ["229", "Darjeeling", "West", "Bengal"],
  ["230", "Alipurduar", "West", "Bengal"],
  ["231", "Purulia", "West", "Bengal"],
  ["232", "Jangipur", "West", "Bengal"],
  ["233", "Bangaon", "West", "Bengal"],
  ["234", "Cooch", "Behar", "West", "Bengal"],
  ["235", "Patna", "Bihar"],
  ["236", "Gaya", "Bihar"],
  ["237", "Bhagalpur", "Bihar"],
  ["238", "Muzaffarpur", "Bihar"],
  ["239", "Purina", "Bihar"],
  ["240", "Begusarai", "Bihar"],
  ["241", "Katihar", "Bihar"],
  ["242", "Munger", "Bihar"],
  ["243", "Chhapra", "Bihar"],
  ["244", "Danapur", "Bihar"],
  ["245", "Hajipur", "Bihar"],
  ["246", "Dehri", "Bihar"],
  ["247", "Siwan", "Bihar"],
  ["248", "Motihari", "Bihar"],
  ["249", "Nawada", "Bihar"],
  ["250", "Bagaha", "Bihar"],
  ["251", "Buxar", "Bihar"],
  ["252", "Sitamarhi", "Bihar"],
  ["253", "Jamalpur", "Bihar"],
  ["254", "Jehanabad", "Bihar"],
  ["255", "Aurangabad", "Bihar"],
  ["256", "Jamshedpur", "Bihar"],
  ["257", "Dhanbad", "Bihar"],
  ["258", "Ranchi", "Bihar"],
  ["259", "Bokaro", "Bihar"],
  ["260", "Deoghar", "Bihar"],
  ["261", "Phusro", "Bihar"],
  ["262", "Hazaribagh", "Bihar"],
  ["263", "Giridih", "Bihar"],
  ["264", "Ramgarh", "Bihar"],
  ["265", "Medininagar", "Bihar"],
  ["266", "Chirkunda", "Bihar"],
  ["267", "Meerut", "Uttar", "Pradesh"],
  ["268", "Saharanpur", "Uttar", "Pradesh"],
  ["269", "Ghaziabad", "Uttar", "Pradesh"],
  ["270", "Noida", "Uttar", "Pradesh"],
  ["271", "Aligarh", "Uttar", "Pradesh"],
  ["272", "Agra", "Uttar", "Pradesh"],
  ["273", "Moradabad", "Uttar", "Pradesh"],
  ["274", "Bareily", "Uttar", "Pradesh"],
  ["275", "Etawah", "Uttar", "Pradesh"],
  ["276", "Jhansi", "Uttar", "Pradesh"],
  ["277", "Lucknow", "Uttar", "Pradesh"],
  ["278", "Kanpur", "Uttar", "Pradesh"],
  ["279", "Prayagraj", "Uttar", "Pradesh"],
  ["280", "Varanasi", "Uttar", "Pradesh"],
  ["281", "Ayodhya", "Uttar", "Pradesh"],
  ["282", "Basti", "Uttar", "Pradesh"],
  ["283", "Gorakhpur", "Uttar", "Pradesh"],
  ["284", "Faridabad", "Haryana"],
  ["285", "Gurugram", "Haryana"],
  ["286", "Panipat", "Haryana"],
  ["287", "Ambala", "Haryana"],
  ["288", "Yamunagar", "Haryana"],
  ["289", "Rohtak", "Haryana"],
  ["290", "Sonipat", "Haryana"],
  ["291", "Bhiwani", "Haryana"],
  ["292", "Ludhiana", "Punjab"],
  ["293", "Amritsar", "Punjab"],
  ["294", "Jalandhar", "Punjab"],
  ["295", "Patiala", "Punjab"],
  ["296", "Bathinda", "Punjab"],
  ["297", "Mohali", "Punjab"],
  ["298", "Batala", "Punjab"],
  ["299", "Pathankot", "Punjab"],
  ["300", "Firozpur", "Punjab"],
  ["301", "Malerkotla", "Punjab"],
  ["302", "Khanna", "Punjab"],
  ["303", "Muktsar", "Punjab"],
  ["304", "Sunam", "Punjab"],
  ["305", "Srinagar", "Jammu", "And", "Kashmir"],
  ["306", "Jammu", "Jammu", "And", "Kashmir"],
  ["307", "Anantnag", "Jammu", "And", "Kashmir"],
  ["308", "Shimla", "Himachal", "Pradesh"],
  ["309", "Dharamshala", "Himachal", "Pradesh"],
  ["310", "Solan", "Himachal", "Pradesh"],
  ["311", "Palampur", "Himachal", "Pradesh"],
  ["312", "Sundarnagar", "Himachal", "Pradesh"],
  ["313", "Kullu", "Himachal", "Pradesh"],
  ["314", "Manali", "Himachal", "Pradesh"],
  ["315", "Dalhousie", "Himachal", "Pradesh"],
  ["316", "Rohru", "Himachal", "Pradesh"],
  ["317", "Jawalamukhi", "Himachal", "Pradesh"],
  ["318", "Indora", "Himachal", "Pradesh"],
  ["319", "Kasauli", "Himachal", "Pradesh"],
  ["320", "Naina", "Devi", "Himachal", "Pradesh"],
  ["321", "Kotkhai", "Himachal", "Pradesh"],
  ["322", "Narkanda", "Himachal", "Pradesh"],
  ["323", "Sarkaghat", "Himachal", "Pradesh"],
  ["324", "Una", "Himachal", "Pradesh"],
  ["325", "Dehradun", "Uttarakhand"],
  ["326", "Haridwar", "Uttarakhand"],
  ["327", "Roorke", "Uttarakhand"],
  ["328", "Rishikesh", "Uttarakhand"],
  ["329", "Kashipur", "Uttarakhand"],
  ["330", "Hadwani", "Uttarakhand"],
  ["331", "Rudrapur", "Uttarakhand"],
  ["332", "Gangtok", "Sikkim"],
  ["333", "Namchi", "Sikkim"],
  ["334", "Udalguri", "Assam"],
  ["335", "Karimganj", "Assam"],
  ["336", "Cachar", "Assam"],
  ["337", "Kampur", "Assam"],
  ["338", "Dhubri", "Assam"],
  ["339", "Sivasagar", "Assam"],
  ["340", "Guwahati", "Assam"],
  ["341", "Silchar", "Assam"],
  ["342", "Jorhat", "Assam"],
  ["343", "Papum", "Pare", "Arunachal", "Pradesh"],
  ["344", "Changlang", "Arunachal", "Pradesh"],
  ["345", "Lohit", "Arunachal", "Pradesh"],
  ["346", "West", "Siang", "Arunachal", "Pradesh"],
  ["347", "Tirap", "Arunachal", "Pradesh"],
  ["348", "East", "Siang", "Arunachal", "Pradesh"],
  ["349", "Kuma", "Kurg", "Arunachal", "Pradesh"],
  ["350", "Dimapur", "Nagaland"],
  ["351", "Kiphire", "Nagaland"],
  ["352", "Kohima", "Nagaland"],
  ["353", "Longleng", "Nagaland"],
  ["354", "Mon", "Nagaland"],
  ["355", "Phek", "Nagaland"],
  ["356", "Tuensang", "Nagaland"],
  ["357", "Wokha", "Nagaland"],
  ["358", "Noklak", "Nagaland"],
  ["359", "Chandel", "Manipur"],
  ["360", "Imphal", "East", "Manipur"],
  ["361", "Imphal", "West", "Manipur"],
  ["362", "Senapati", "Manipur"],
  ["363", "Thoubal", "Manipur"],
  ["364", "Churachandpur", "Manipur"],
  ["365", "Dhalai", "Tripura"],
  ["366", "North", "Tripura", "Tripura"],
  ["367", "South", "Tripura", "Tripura"],
  ["368", "West", "Tripura", "Tripura"],
  ["369", "Mamit", "Mizoram"],
  ["370", "Aizawal", "Mizoram"],
  ["371", "Kolasib", "Mizoram"],
  ["372", "Champhai", "Mizoram"],
  ["373", "Serchhip", "Mizoram"],
  ["374", "Saiha", "Mizoram"],
  ["375", "Lawngtlai", "Mizoram"],
];

export {location};