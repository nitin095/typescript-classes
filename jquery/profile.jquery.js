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
    $('#getCurrentCity').click(()=>{
        let city = profile.getCurrentCity();
        $('.city').text(city);
        console.log(`Current city: ${city}`)
    });
    $('#getDob').click(()=>{
        let dob = profile.getDob();
        $('.dob').text(dob);
        console.log(`DOB: ${dob}`)
    });
    $('#getWork').click(()=>{
        let work = profile.getWork();
        $('.work').text(work);
        console.log(`Works at: ${work}`)
    });
    $('#getSchool').click(()=>{
        let school = profile.getSchool();
        $('.school').text(school);
        console.log(`School: ${school}`)
    });
    $('#getUniversity').click(()=>{
        let university = profile.getUniversity();
        $('.university').text(university);
        console.log(`University: ${university}`)
    });
    $('#getProfileLink').click(()=>{
        let link = profile.getProfileLink();
        $('.link').text(link);
        console.log(`Profile link: ${link}`)
    });
    $('#getNumberOfFriends').click(()=>{
        console.log(`Number of Friends: ${profile.getNumberOfFriends()}`)
    });
    $('#getAge').click(()=>{
        let age = profile.getAge();
        $('.age').text(age);
        console.log(`Age: ${age}`)
    });
    $('#getFriendsList').click(()=>{
        console.log(profile.getFriendsList())
    });
    $('#getProfileId').click(()=>{
        console.log(profile.getProfileId())
    });
    $('#getUserName').click(()=>{
        console.log(profile.getUserName())
    });
    $('#getOverview').click(()=>{
        console.log( profile.getOverview())
    });
    $('#getWorkAndEducation').click(()=>{
        console.log(profile.getWorkAndEducation())
    });
    $('#getPlacesLived').click(()=>{
        console.log(profile.getPlacesLived())
    });
    $('#getContactAndBasicInfo').click(()=>{
        console.log( profile.getContactAndBasicInfo())
    });
    $('#getFamilyAndRelationships').click(()=>{
        console.log(profile.getFamilyAndRelationships())
    });
    $('#getDetails').click(()=>{
        console.log(profile.getDetails())
    });
    $('#getLifeEvents').click(()=>{
        console.log(profile.getLifeEvents())
    });

    //setters
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
        $('#getCurrentCity').click()
    });
    $('#addHighSchool').click(()=>{
        let school = prompt('Enter school name');
        profile.addHighSchool(school);
        $('#getSchool').click()
    });
    $('#addUniversity').click(()=>{
        let school = prompt('Enter university name');
        profile.addUniversity(school);
        $('#getUniversity').click()
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
        $('#getWork').click()
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
        console.log(profile.getContactAndBasicInfo())
    });
    $('#setEmail').click(()=>{
        let email = prompt('Enter email');
        profile.setEmail(email);
        console.log(profile.getContactAndBasicInfo())
    });
    $('#addWebsite').click(()=>{
        let website = prompt('Enter website');
        profile.addWebsite(website);
        console.log(profile.getContactAndBasicInfo())
    });
    $('#setDob').click(()=>{
        let dob = prompt('Enter dob');
        profile.setDob(dob);
        console.log(profile.getContactAndBasicInfo())
    });
    $('#setGender').click(()=>{
        let gender = prompt('Enter gender');
        profile.setGender(gender);
        console.log(profile.getContactAndBasicInfo())
    });
    $('#setReligiousViews').click(()=>{
        let views = prompt('Enter Religious views');
        profile.setReligiousViews(views);
        console.log(profile.getContactAndBasicInfo())
    });
    $('#setPoliticalViews').click(()=>{
        let views = prompt('Enter Political views');
        profile.setPoliticalViews(views);
        console.log(profile.getContactAndBasicInfo())
    });
    $('#setRelationshipStatus').click(()=>{
        let status = prompt('Enter tRelationship Status');
        profile.setRelationshipStatus(status);
        console.log(profile.getFamilyAndRelationships())
    });
    $('#addFamilyMember').click(()=>{
        let member = prompt('Enter Family member');
        profile.addFamilyMember(member);
        console.log(profile.getFamilyAndRelationships())
    });
    $('#setAboutYou').click(()=>{
        let about = prompt('Enter About you');
        profile.setAboutYou(about);
        console.log(profile.getDetails())
    });
    $('#addOtherName').click(()=>{
        let name = prompt('Enter other name');
        profile.addOtherName(name);
        console.log(profile.getDetails())
    });
    $('#addQuote').click(()=>{
        let quote = prompt('Enter quote');
        profile.addQuote(quote);
        console.log(profile.getDetails())   
    });
    $('#addLifeEvent').click(()=>{
        let eventYear = prompt('Enter Life Event Year');
        let event = prompt('Enter event name')
        profile.addLifeEvent(eventYear,event);
        $('#getLifeEvents').click()
    });
});