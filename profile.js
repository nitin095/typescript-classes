var Profile = /** @class */ (function () {
    function Profile(overview, placesLived, contactAndBasicInfo, workAndEducation, familyAndRelationships, details, lifeEvents, friendsList) {
        var _this = this;
        this.overview = overview;
        //methods
        //getters
        this.getProfileLink = function () {
            return "https://www.facebook.com/" + _this.userName;
        };
        this.getFullName = function () {
            return _this.firstName + " " + _this.lastName;
        };
        this.getAge = function () {
            var today = new Date;
            var currentYear = today.getFullYear();
            return currentYear - _this.contactAndBasicInfo.yob;
        };
        this.getMobileNumber = function () {
            return _this.contactAndBasicInfo.mobilePhone;
        };
        this.getCurrentCity = function () {
            return _this.placesLived.currentCity;
        };
        this.getDob = function () {
            return _this.contactAndBasicInfo.dob;
        };
        this.getWork = function () {
            return _this.workAndEducation.work;
        };
        this.getSchool = function () {
            return _this.workAndEducation.highSchool;
        };
        this.getUniversity = function () {
            return _this.workAndEducation.university;
        };
        this.getFriendsList = function () {
            if (_this.friendsList == undefined) {
                return 'No friends.';
            }
            else {
                return _this.friendsList;
            }
        };
        this.getNumberOfFriends = function () {
            return _this.friendsList.length;
        };
        this.getProfileId = function () {
            return _this.id;
        };
        this.getUserName = function () {
            return _this.userName;
        };
        this.getFirstName = function () {
            return _this.firstName;
        };
        this.getLastName = function () {
            return _this.lastName;
        };
        this.getOverview = function () {
            return _this.overview;
        };
        this.getWorkAndEducation = function () {
            return _this.workAndEducation;
        };
        this.getPlacesLived = function () {
            return _this.placesLived;
        };
        this.getContactAndBasicInfo = function () {
            return _this.contactAndBasicInfo;
        };
        this.getFamilyAndRelationships = function () {
            return _this.familyAndRelationships;
        };
        this.getDetails = function () {
            return _this.details;
        };
        this.getLifeEvents = function () {
            return _this.lifeEvents;
        };
        //setters
        this.setName = function (firstName, lastName) {
            _this.firstName = firstName;
            _this.lastName = lastName;
        };
        this.addFriend = function (id) {
            if (_this.friendsList == undefined) {
                _this.friendsList = [];
            }
            return _this.friendsList.push(id);
        };
        this.removeFriend = function (id) {
            var found = false;
            for (var _i = 0, _a = _this.friendsList; _i < _a.length; _i++) {
                var friendId = _a[_i];
                if (friendId == id) {
                    found = true;
                    _this.friendsList.splice(_this.friendsList.indexOf(friendId), 1);
                }
            }
            if (!found) {
                alert("No friend found with this id.");
            }
        };
        this.setCurrentCity = function (city) {
            if (_this.placesLived.otherPlacedLived == undefined) {
                _this.placesLived.otherPlacedLived = [];
            }
            _this.placesLived.otherPlacedLived.push(_this.placesLived.currentCity);
            _this.placesLived.currentCity = city;
        };
        this.addHighSchool = function (schoolName) {
            _this.workAndEducation.highSchool.push(schoolName);
        };
        this.addUniversity = function (universityName) {
            _this.workAndEducation.university.push(universityName);
        };
        this.addProfessionalSkills = function (skill) {
            _this.workAndEducation.professionalSkills.push(skill);
        };
        this.addWork = function (work) {
            _this.workAndEducation.work.push(work);
        };
        this.setMobilPhone = function (phoneNumber) {
            _this.contactAndBasicInfo.mobilePhone[_this.contactAndBasicInfo.mobilePhone.length - 1] = phoneNumber;
        };
        this.addmobilePhone = function (phoneNumber) {
            _this.contactAndBasicInfo.mobilePhone.push(phoneNumber);
        };
        this.setAddress = function (address) {
            _this.contactAndBasicInfo.address = address;
        };
        this.setEmail = function (email) {
            _this.contactAndBasicInfo.email = email;
        };
        this.addWebsite = function (website) {
            _this.contactAndBasicInfo.website.push(website);
        };
        this.setDob = function (dob) {
            _this.contactAndBasicInfo.dob = dob;
            var year = dob.substr(dob.length - 4);
            _this.contactAndBasicInfo.yob = year;
        };
        this.setGender = function (gender) {
            _this.contactAndBasicInfo.gender = gender;
        };
        this.setReligiousViews = function (views) {
            _this.contactAndBasicInfo.religiousViews = views;
        };
        this.setPoliticalViews = function (views) {
            _this.contactAndBasicInfo.politicaliews = views;
        };
        this.setRelationshipStatus = function (status) {
            _this.familyAndRelationships.status = status;
        };
        this.addFamilyMember = function (profileId) {
            _this.familyAndRelationships.familyMembers.push(profileId);
        };
        this.setAboutYou = function (aboutText) {
            _this.details.aboutText = aboutText;
        };
        this.addOtherName = function (name) {
            if (_this.details.otherNames == undefined) {
                _this.details.otherNames = [];
            }
            _this.details.otherNames.push(name);
        };
        this.addQuote = function (quote) {
            if (_this.details.favQuotes == undefined) {
                _this.details.favQuotes = [];
            }
            _this.details.favQuotes.push(quote);
        };
        this.addLifeEvent = function (year, event) {
            return _this.lifeEvents.push({ year: year, event: event });
        };
        this.id = overview.id;
        this.userName = overview.userName;
        this.firstName = overview.firstName;
        this.lastName = overview.lastName;
        this.workAndEducation = workAndEducation;
        this.placesLived = placesLived;
        this.contactAndBasicInfo = contactAndBasicInfo;
        this.familyAndRelationships = familyAndRelationships;
        this.details = details;
        this.lifeEvents = lifeEvents;
        this.friendsList = friendsList;
    }
    return Profile;
}());
var profile;
var profileButton = function () {
    profile = new Profile({ id: 'dnsfnkj232', userName: 'someUserName', firstName: 'Lorem', lastName: 'Ipsum' }, { currentCity: 'New Delhi', homeTown: 'Delhi' }, { mobilePhone: [9999999999], address: 'New Delhi, Delhi', email: '123@somemail.com', dob: '01-01-1995', yob: 1995, religiousViews: 'These are some religious views of the user', politicaliews: 'These are some political views of the user', website: ['somewebsite.com'] }, { work: ['works at knowhere'], professionalSkills: ['no'], university: ['some university'], highSchool: ['some school'] }, { status: 'single', familyMembers: [''] }, { about: 'This is some about-text about the user.' }, [{ year: 1995, event: 'born' }]);
    console.log("Name: " + profile.getFullName());
    console.log("Age is " + profile.getAge());
    console.log("Profile url: " + profile.getProfileLink());
    console.log('Friends list:');
    console.log(profile.getFriendsList());
    console.log('Adding freinds:');
    profile.addFriend('dsvdjjdj223');
    profile.addFriend('someFriendId');
    console.log(profile.getFriendsList());
    console.log('Removing 1 freinds:');
    profile.removeFriend('dsvdjjdj223');
    console.log(profile.getFriendsList());
    console.log('Work And Education:');
    console.log(profile.getWorkAndEducation());
    console.log('Contact And Basic Info:');
    console.log(profile.getContactAndBasicInfo());
    console.log('Places Lived:');
    console.log(profile.getPlacesLived());
    console.log('Family And Relationships:');
    console.log(profile.getFamilyAndRelationships());
    console.log('Details:');
    console.log(profile.getDetails());
    console.log('LifeEvents:');
    console.log(profile.getLifeEvents());
    profile.addLifeEvent(2000, "started school");
    console.log(profile.getLifeEvents());
};
