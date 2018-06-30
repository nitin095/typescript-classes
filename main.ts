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
    getComments = ():any[]|undefined => {
        return this.comments
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
    addToPlaylist = (playlist:string[]):string=>{
        return playlist[playlist.length] = this.id
    }

    }// end class 
    
    let today:Date = new Date;
    let newVideo = new Video("a9fsfAZ60Tk","dk3fdjCu7fJ","Random Title",["smartphones","samsung","galaxy s9+"],"Science & Technology","Standard Youtube License",18,today,"this is sample description",263000,3600,4500,1080,["Subtitles 1","Subtitles 2"],true,false,3433530,5643564,"public");
    newVideo.addComment("001","User1","Comment 1",today);
    newVideo.addCommentLike("001");
    newVideo.addCommentDislike("001");
    console.log(newVideo.getComments());

    let getRelatedVideos :(videoId: string, publisherId: string, playlistId?: string) => string[];
    
    let getChannelName :(publisherId:string) => string;
    
    $(document).ready(() => {
        let playlist = ["id1","id2"];
        $('#getTitle').click(()=>{
            let title = newVideo.getTitle();
            $('.title').text(title);
            console.log(title)
        });
        $('#getViews').click(()=>{
            let views = newVideo.getViews();
            $('.views').text(views);
            console.log(views)
        });
        $('#getLikes').click(()=>{
            let likes = newVideo.getLikes();
            $('.likes').text(likes);
            console.log(likes)
        });
        $('#getDislikes').click(()=>{
            let dislikes = newVideo.getDislikes();
            $('.dislikes').text(dislikes);
            console.log(dislikes)
        });
        $('#getUploadDate').click(()=>{
            let uploadDate:Date = newVideo.getUploadDate();
            let dateString:string = uploadDate.toLocaleString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric' });
            console.log(dateString)
            $('.uploaded').text(dateString);
        });
        $('#getVideoUrl').click(()=>{
            let videoUrl = newVideo.getVideoUrl();
            $('.url').text(videoUrl);
            console.log(videoUrl)
        });
        $('#getCommentsCount').click(()=>{
            let commentCount:number = newVideo.getCommentsCount();
            console.log(commentCount)
            $('.commentsCount').text(commentCount);
        });
        $('#getComments').click(()=>{
            let comments:any = newVideo.getComments();
            updateComments(comments);
        });
        $('#addLike').click(()=>{
            console.log(`Total likes:${newVideo.getLikes()}. \nAdding 1 like`)
            newVideo.addLike();
            let likes = newVideo.getLikes();
            $('.likes').text(likes);
            console.log(`Likes: ${likes}`)
        });
        $('#addDislike').click(()=>{
            console.log(`Total dislikes:${newVideo.getDislikes()}. \nAdding 1 dislike`)
            newVideo.addDislike();
            let dislikes = newVideo.getDislikes();
            $('.dislikes').text(dislikes);
            console.log(`Dislikes: ${dislikes}`)
        });
        $('#addToPlaylist').click(() => {
            newVideo.addToPlaylist(playlist);
            console.log(playlist)
        });
        let commentId:number = 2;
        $('#addComment').click(()=>{
            console.log(`Total comment:${newVideo.getCommentsCount()}\nAdding 1 comment`)
            let commentBody:any = prompt('Type your comment.');
            newVideo.addComment(commentId++,"UserName",commentBody,today)
            let comments:any = newVideo.getComments();
            updateComments(comments);
        });
        $('#addCommentLike').click(() => {
            let commentId = prompt('Enter comment id to increase like');
            newVideo.addCommentLike(commentId);
            let comments:any = newVideo.getComments();
            console.log(comments)
            updateComments(comments);
        });
        $('#addCommentDislike').click(() => {
            let commentId = prompt('Enter comment id to increase dislike');
            newVideo.addCommentDislike(commentId);
            let comments:any = newVideo.getComments();
            console.log(comments)
            updateComments(comments);
        });

        let updateComments = (comments:any) => {
            $('.commentsRow').text('');
            for(let comment of comments){
                $('.commentsRow').append(`
                <div class="col-12"><div class="row">
                    <span class="col-12">${comment.userName} ${comment.date.toLocaleString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric'})}</span>
                    <span class="col-12">${comment.commentBody}</span>
                    <span class="col-auto"><i class="far fa-thumbs-up"></i>${comment.likes}</span>
                    <span class="col-auto"><i class="far fa-thumbs-down"></i>${comment.dislikes}</span>
                    <small class="col text-right">Comment Id: ${comment.commentId}</small>
                    </div><hr></div>`);
            }//edn for
        };
    });