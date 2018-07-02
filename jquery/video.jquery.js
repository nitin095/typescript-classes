
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
        let uploadDate = newVideo.getUploadDate();
        let dateString = uploadDate.toLocaleString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric' });
        console.log(dateString)
        $('.uploaded').text(dateString);
    });
    $('#getVideoUrl').click(()=>{
        let videoUrl = newVideo.getVideoUrl();
        $('.url').text(videoUrl);
        console.log(videoUrl)
    });
    $('#getCommentsCount').click(()=>{
        let commentCount = newVideo.getCommentsCount();
        console.log(commentCount)
        $('.commentsCount').text(commentCount);
    });
    $('#getComments').click(()=>{
        let comments = newVideo.getComments();
        updateComments(comments);
    });
    $('#getId').click(()=>{
        console.log(newVideo.getId())
    });
    $('#getPublisherId').click(()=>{
        console.log(newVideo.getPublisherId())
    });
    $('#getTags').click(()=>{
        console.log(newVideo.getTags())
    });
    $('#getCategory').click(()=>{
        console.log(newVideo.getCategory())
    });
    $('#getLicense').click(()=>{
        console.log(newVideo.getLicense())
    });
    $('#getDuration').click(()=>{
        $('.duration').text(`${newVideo.getDuration()} minutes`)
        console.log(newVideo.getDuration())
    });
    $('#getDescription').click(()=>{
        console.log(newVideo.getDescription())
    });
    $('#getSubtitles').click(()=>{
        console.log(newVideo.getSubtitles())
    });
    $('#getResolution').click(()=>{
        console.log(newVideo.getResolution())
    });
    $('#getMonitization').click(()=>{
        console.log(newVideo.getMonitization())
    });
    $('#getAgeRestriction').click(()=>{
        console.log(newVideo.getAgeRestriction())
    });
    $('#getWatchTime').click(()=>{
        console.log(newVideo.getWatchTime())
    });
    $('#getImpressions').click(()=>{
        console.log(newVideo.getImpressions())
    });
    $('#getVisibility').click(()=>{
        console.log(newVideo.getVisibility())
    });
    $('#addLike').click(()=>{
        console.log(`Total likes:${newVideo.getLikes()}. \nAdding 1 like`)
        newVideo.addLike();
        $('#getlikes').click()
    });
    $('#addDislike').click(()=>{
        console.log(`Total dislikes:${newVideo.getDislikes()}. \nAdding 1 dislike`)
        newVideo.addDislike();
        $('#getDislikes').click()
    });
    $('#addView').click(()=>{
        newVideo.addView();
        $('#getViews').click()
    });
    $('#addToPlaylist').click(() => {
        newVideo.addToPlaylist(playlist);
        console.log(playlist)
    });
    let commentId = 2;
    $('#addComment').click(()=>{
        console.log(`Total comment:${newVideo.getCommentsCount()}\nAdding 1 comment`)
        let commentBody = prompt('Type your comment.');
        newVideo.addComment(commentId++,"UserName",commentBody,today)
        let comments = newVideo.getComments();
        updateComments(comments);
    });
    $('#addCommentLike').click(() => {
        let commentId = prompt('Enter comment id to increase like');
        newVideo.addCommentLike(commentId);
        let comments = newVideo.getComments();
        console.log(comments)
        updateComments(comments);
    });
    $('#addCommentDislike').click(() => {
        let commentId = prompt('Enter comment id to increase dislike');
        newVideo.addCommentDislike(commentId);
        let comments = newVideo.getComments();
        console.log(comments)
        updateComments(comments);
    });
    $('#setTitle').click(()=>{
        let title = prompt('Enter title');
        newVideo.setTitle(title);
        $('#getTitle').click()
    });

    let updateComments = (comments) => {
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