class Profile {
    private id:string;
    private userName:string;
    private firstName:string;
    private lastName:string;
    private workAndEducation:any;
    private placesLived:any;
    private contactAndBasicInfo:any;
    private familyAndRelationships:any;
    private details:any;
    private lifeEvents:any;
    private friendsList:any;

    constructor (
        private overview:{id:string,userName:string,firstName:string,lastName:string},
        placesLived:{currentCity:string,homeTown:string,otherPlacedLived?:string[]},
        contactAndBasicInfo:{mobilePhone:number[],address:string,email:string,dob:string,yob:number,interestedIn?:string,religiousViews?:string,politicaliews?:string,website?:string[]},
        workAndEducation?:{work?:any[],professionalSkills:any[],university:any[],highSchool:any[]},
        familyAndRelationships?:{status:string,familyMembers:string[]},
        details?:{about?:string,otherNames?:string[],favQuotes?:string[]},
        lifeEvents?:[{year:number,event:string}],friendsList?:string[])
        {
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
        this.friendsList = friendsList
    }

    //methods

    //getters
    getProfileLink = ():string => {
        return `https://www.facebook.com/${this.userName}`
    }
    getFullName = ():string => {
        return `${this.firstName} ${this.lastName}`
    }
    getAge = ():number => {
        let today:Date = new Date;
        let currentYear:number = today.getFullYear();
        return currentYear-this.contactAndBasicInfo.yob
    }
    getMobileNumber = ():number => {
        return this.contactAndBasicInfo.mobilePhone
    }
    getFriendsList = ():any => {
        if(this.friendsList == undefined){
            return 'No friends.'
        }else{
            return this.friendsList
        }
    }
    getProfileId = ():string => {
        return this.id
    }
    getUserName = ():string => {
        return this.userName
    }
    getFirstName = ():string => {
        return this.firstName
    }
    getLastName = ():string => {
        return this.lastName
    }
    getOverview = ():any => {
        return this.overview
    }
    getWorkAndEducation = ():any[] => {
        return this.workAndEducation
    }
    getPlacesLived = ():any[] => {
        return this.placesLived
    }
    getContactAndBasicInfo = ():any[] => {
        return this.contactAndBasicInfo
    }
    getFamilyAndRelationships = ():any[] => {
        return this.familyAndRelationships
    }
    getDetails = ():any[] => {
        return this.details
    }
    getLifeEvents = ():any[] => {
        return this.lifeEvents
    }
    getFriendsSuggestions! :(mobilePhone:number,highSchool:string[],university:string[],work:string[]) => any;

    //setters
    setName = (firstName:string,lastName:string) => {
        this.firstName = firstName; 
        this.lastName = lastName
    }
    addFriend = (id:string) => {
        if(this.friendsList == undefined){
            this.friendsList = []
        }
 
        return this.friendsList.push(id)
    }
    removeFriend = (id:string) => {
        return this.friendsList.pop(id)
    }
    setCurrentCity = (city:string) => {
        if(this.placesLived.otherPlacedLived == undefined){
            this.placesLived.otherPlacedLived = []
        }
        this.placesLived.otherPlacedLived.push(this.placesLived.currentCity);
        this.placesLived.currentCity = city;
    }
    addHighSchool = (schoolName:string) => {
        this.workAndEducation.highSchool.push(schoolName)
    }
    addUniversity = (universityName:string) => {
        this.workAndEducation.university.push(universityName)
    }
    addProfessionalSkills = (skill:string) => {
        this.workAndEducation.professionalSkills.push(skill)
    }
    addWork = (work:string) => {
        this.workAndEducation.work.push(work)
    }
    setMobilPhone = (phoneNumber:number) => {
        this.contactAndBasicInfo.mobilePhone[this.contactAndBasicInfo.mobilePhone.length-1] = phoneNumber
    }
    addmobilePhone = (phoneNumber:number) => {
        this.contactAndBasicInfo.mobilePhone.push(phoneNumber)
    }
    setAddress = (address:string) => {
        this.contactAndBasicInfo.address = address
    }
    setEmail = (email:string) => {
        this.contactAndBasicInfo.email = email
    }
    addWebsite = (website:string) => {
        this.contactAndBasicInfo.website.push(website)
    }
    setDob = (dob:string) => {
        this.contactAndBasicInfo.dob = dob
        let year = dob.substr(dob.length-4);
        this.contactAndBasicInfo.yob = year;
    }
    setGender = (gender:string) => {
        this.contactAndBasicInfo.gender = gender
    }
    setReligiousViews = (views:string) => {
        this.contactAndBasicInfo.religiousViews = views
    }
    setPoliticalViews = (views:string) => {
        this.contactAndBasicInfo.politicaliews = views
    }
    setRelationshipStatus = (status:string) => {
        this.familyAndRelationships.status = status
    }
    addFamilyMember = (profileId:string) => {
        this.familyAndRelationships.familyMembers.push(profileId)
    }
    setAboutYou = (aboutText:string) => {
        this.details.aboutText = aboutText
    }
    addOtherName = (name:string) => {
        if(this.details.otherNames == undefined){
            this.details.otherNames = []
        }
        this.details.otherNames.push(name)
    }
    addQuote = (quote:string) => {
        if(this.details.favQuotes == undefined){
            this.details.favQuotes = []
        }
        this.details.favQuotes.push(quote)
    }
    addLifeEvent = (year:number,event:string) => {
        return this.lifeEvents.push({year:year,event:event});
    }
}

let profileButton = () => {

    let profile = new Profile({id:'dnsfnkj232',userName:'someUserName',firstName:'Lorem',lastName:'Ipsum'},{currentCity:'New Delhi',homeTown:'Delhi'},{mobilePhone:[9999999999],address:'New Delhi, Delhi',email:'123@somemail.com',dob:'01-01-1995',yob:1995,religiousViews:'These are some religious views of the user',politicaliews:'These are some political views of the user',website:['somewebsite.com']},{work:['works at knowhere'],professionalSkills:['no'],university:['some university'],highSchool:['some school']},{status:'single',familyMembers:['']},{about:'This is some about-text about the user.'},[{year:1995,event:'born'}]);

    console.log(`Name: ${profile.getFullName()}`);
    console.log(`Age is ${profile.getAge()}`);
    console.log(`Profile url: ${profile.getProfileLink()}`);

    console.log('Friends list:')
    console.log(profile.getFriendsList());
    console.log('Adding freinds:')
    profile.addFriend('dsvdjjdj223');
    profile.addFriend('skkjfkjw334');
    console.log(profile.getFriendsList());
    console.log('Removing 1 freinds:')
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
    profile.addLifeEvent(2000,"started school");
    console.log(profile.getLifeEvents())
}