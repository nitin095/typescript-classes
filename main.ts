// defining Youtube video class
class Video {

    constructor (private id:string,private publisherId:string,public title:string,private tags:string[],public category:string,public license:string,public duration:number,public uploaded:Date,public description:string,public views:number,private likes:number,private dislikes:number,private resolution:number,public subtitles:string[],private monitization:boolean,private ageRestricted:boolean,private watchtime:number,private impressions:number,private visibility:string,private comments?:any[]){
        this.id = id;
        this.publisherId = publisherId;
        this.title = title;
        this.tags = tags;
        this.category = category;
        this.license = license;
        this.duration = duration;
        this.uploaded = uploaded;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.description = description;
        this.comments = comments;
        this.subtitles = subtitles;
        this.resolution = resolution;
        this.monitization = monitization;
        this.ageRestricted = ageRestricted;
        this.watchtime = watchtime;
        this.impressions = impressions;
        this.visibility = visibility
    }// end constructor
    
    // methods
    getId = ():string=>{
        return this.id
    }
    getPublisherId = ():string => {
        return this.publisherId
    }
    getTitle = ():string => {
        return this.title
    }
    getTags = ():string[] => {
        return this.tags
    }
    getCategory = ():string => {
        return this.category
    }
    getLicense = ():string => {
        return this.license
    }
    getDuration = ():number => {
        return this.duration
    }
    getUploadDate = ():Date=>{
        return this.uploaded
    }
    getViews = ():number => {
        return this.views
    }
    getLikes = ():number=>{
        return this.likes
    }
    getDislikes = ():number => {
        return this.dislikes
    }
    getDescription = ():string => {
        return this.description
    }
    getComments = ():any => {
        if(this.comments == undefined){
            return 0
        }else{
            return this.comments
        }
    }
    getSubtitles = ():string[] => {
        return this.subtitles
    }
    getResolution = ():number => {
        return this.resolution
    }
    getMonitization = ():boolean => {
        return this.monitization
    }
    getAgeRestriction = ():boolean => {
        return this.ageRestricted
    }
    getWatchTime = ():number => {
        return this.watchtime
    }
    getImpressions = ():number => {
        return this.impressions
    }
    getVisibility = ():string => {
        return this.visibility
    }
    getVideoUrl = ():string=>{
        let url = `https://www.youtube.com/watch?v=${this.id}`;
        return url
    }
    getCommentsCount = ():number=>{
        if (this.comments !== undefined){
            return this.comments.length
        }
        return 0
    }
    getEmbedCode = ():string => {
        return `<iframe width="640" height="360" src="https://www.youtube.com/embed/${this.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
    }
    //setter methods
    addLike = ():number=>{
        return this.likes++
    }
    addDislike = ():number=>{
        return this.dislikes++
    }
    addComment = (commentId:any,user:string,comment:any,date:Date) => {
        //return this.comments[this.comments.length] = comment
        if(this.comments == undefined){
            this.comments = [];    
        }
            return this.comments[this.comments.length] = {commentId: commentId,userName: user,commentBody: comment,date: date,likes: 0,dislikes: 0};
    }
    addCommentLike = (commentId:any) => {
        if(this.comments !== undefined){
            for(let comment of this.comments){
                if(comment.commentId == commentId){
                    return comment.likes++
                }
            }
        }
    }
    addCommentDislike = (commentId:any) => {
        if(this.comments !== undefined){
            for(let comment of this.comments){
                if(comment.commentId == commentId){
                    return comment.dislikes++
                }
            }
        }
    }
    addToPlaylist = (playlist:string[])=>{
        playlist[playlist.length] = this.id
    }

    }// end class 
    
    let videoButton = () => {
        let today:Date = new Date;
        let newVideo = new Video("a9fsfAZ60Tk","dk3fdjCu7fJ","Random Title",["smartphones","samsung","galaxy s9+"],"Science & Technology","Standard Youtube License",18,today,"this is sample description",263000,3600,4500,1080,["Subtitles 1","Subtitles 2"],true,false,3433530,5643564,"public");
        
        console.log(`Title: ${newVideo.getTitle()}`);
        console.log(`Views: ${newVideo.getViews()}`);
        console.log(`Likes: ${newVideo.getLikes()}`);
        console.log(`Dislikes: ${newVideo.getDislikes()}`);
        console.log(`Uploaded on: ${newVideo.getUploadDate()}`);
        console.log(`Title: ${newVideo.getTitle()}`);
        console.log(`Video url: ${newVideo.getVideoUrl()}`);
        console.log(`Number of comments: ${newVideo.getCommentsCount()}`);
        
        console.log('Comments:')
        console.log(newVideo.getComments());
        console.log('Adding a comment:')
        newVideo.addComment("001","User1","Comment 1",today);
        newVideo.addCommentLike("001");
        newVideo.addCommentDislike("001");
        console.log(newVideo.getComments());

        console.log("Playlist:");
        let playlist = ["videoId001","videoId002"];
        console.log(playlist);
        console.log("Adding this video to playlist:");
        newVideo.addToPlaylist(playlist)
        console.log(playlist);

        let getRelatedVideos :(videoId: string, publisherId: string, playlistId?: string) => string[];
        
        let getChannelName :(publisherId:string) => string;
    }