
$(document).ready(()=>{
    $('#getFullName').click(()=>{
        let name = profile.getFullName();
        $('.name').text(name);
        console.log(`Full name: ${name}`)
    });
    $('#getMobileNumber').click(()=>{
        let mobile = profile.getMobileNumber();
        $('.mobile').text(mobile);
        console.log(`Mobile phone number: ${mobile}`)
    });
    $('#getProfileLink').click(()=>{
        let link = profile.getProfileLink();
        $('.link').text(link);
        console.log(`Profile link: ${link}`)
    });
    $('#getAge').click(()=>{
        let age = profile.getAge();
        $('.age').text(age);
        console.log(`Age: ${age}`)
    });
    $('#getFriendsList').click(()=>{
        let friendList = profile.getFriendsList();
        console.log(`Friend List: ${friendList}`)
    });
    $('#getProfileId').click(()=>{
        let id = profile.getProfileId();
        console.log(`Profile Id: ${id}`)
    });
    $('#getUserName').click(()=>{
        let userName = profile.getUserName();
        console.log(`User name: ${userName}`)
    });
    $('#getOverview').click(()=>{
        let overview = profile.getOverview();
        console.log(overview)
    });
    $('#getWorkAndEducation').click(()=>{
        let workAndEducation = profile.getWorkAndEducation();
        console.log(workAndEducation)
    });
    $('#getPlacesLived').click(()=>{
        let placesLived = profile.getPlacesLived();
        console.log(placesLived)
    });
    $('#getContactAndBasicInfo').click(()=>{
        let contactAndBasicInfo = profile.getContactAndBasicInfo();
        console.log(contactAndBasicInfo)
    });
    $('#getFamilyAndRelationships').click(()=>{
        let familyAndRelationships = profile.getFamilyAndRelationships();
        console.log(familyAndRelationships)
    });
    $('#getDetails').click(()=>{
        let details = profile.getDetails();
        console.log(details)
    });
    $('#getLifeEvents').click(()=>{
        let lifeEvents = profile.getLifeEvents();
        console.log(lifeEvents)
    });

    $('#setName').click(()=>{
        let fname = prompt('Enter first name');
        let lname = prompt('Enter last name')
        profile.setName(fname,lname);
        $('#getFullName').click();
    });
    $('#addFriend').click(()=>{
        let friend = prompt('Enter user id to add friend');
        profile.addFriend(friend);
        console.log(`Friend list: ${profile.getFriendsList()}`)
    });
    $('#removeFriend').click(()=>{
        let friend = prompt('Enter user id to remove friend');
        profile.removeFriend(friend);
        console.log(`Friend list: ${profile.getFriendsList()}`)
    });
    $('#setCurrentCity').click(()=>{
        let city = prompt('Enter city');
        profile.setCurrentCity(city);
        let places = profile.getPlacesLived();
        console.log(`Current city: ${places.currentCity}`)
    });
    $('#addHighSchool').click(()=>{
        let school = prompt('Enter school name');
        profile.addHighSchool(school);
        let education = profile.getWorkAndEducation();
        console.log(education.highSchool)
    });
    $('#addUniversity').click(()=>{
        let school = prompt('Enter university name');
        profile.addUniversity(school);
        let education = profile.getWorkAndEducation();
        console.log(education.university)
    });
    $('#addProfessionalSkills').click(()=>{
        let skill = prompt('Enter skill');
        profile.addProfessionalSkills(skill);
        let work = profile.getWorkAndEducation();
        console.log(work.professionalSkills)
    });
    $('#addWork').click(()=>{
        let newWork = prompt('Enter work');
        profile.addWork(newWork);
        let work = profile.getWorkAndEducation();
        console.log(work.work)
    });
    $('#setMobilPhone').click(()=>{
        let number = prompt('Enter number');
        profile.setMobilPhone(number);
        $('#getMobileNumber').click();
    });
    $('#addmobilePhone').click(()=>{
        let number = prompt('Enter number');
        profile.addmobilePhone(number);
        $('#getMobileNumber').click();
    });
    $('#setAddress').click(()=>{
        let address = prompt('Enter address');
        profile.setAddress(address);
    });
    $('#setEmail').click(()=>{
        let email = prompt('Enter email');
        profile.setEmail(email);
    });
    $('#addWebsite').click(()=>{
        let website = prompt('Enter website');
        profile.addWebsite(website);
    });
    $('#setDob').click(()=>{
        let dob = prompt('Enter dob');
        profile.setDob(dob);
    });
    $('#setGender').click(()=>{
        let gender = prompt('Enter gender');
        profile.setGender(gender);
    });
    $('#setReligiousViews').click(()=>{
        let views = prompt('Enter Religious views');
        profile.setReligiousViews(views);
    });
    $('#setPoliticalViews').click(()=>{
        let views = prompt('Enter Political views');
        profile.setPoliticalViews(views);
    });
    $('#setRelationshipStatus').click(()=>{
        let status = prompt('Enter tRelationship Status');
        profile.setRelationshipStatus(status);
    });
    $('#addFamilyMember').click(()=>{
        let member = prompt('Enter Family member');
        profile.addFamilyMember(member);
    });
    $('#setAboutYou').click(()=>{
        let about = prompt('Enter About you');
        profile.setAboutYou(about);
    });
    $('#addOtherName').click(()=>{
        let name = prompt('Enter other name');
        profile.addOtherName(name);
    });
    $('#addQuote').click(()=>{
        let quote = prompt('Enter quote');
        profile.addQuote(quote);
    });
    $('#addLifeEvent').click(()=>{
        let eventYear = prompt('Enter Life Event Year');
        let event = prompt('Enter event name')
        profile.addLifeEvent(eventYear,event);
    });

});