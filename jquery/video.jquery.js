
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