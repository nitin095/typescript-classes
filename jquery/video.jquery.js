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
    $('#getTrendingNumber').click(()=>{
        console.log(`Trending #${newVideo.getTrendingNumber()}`)
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
        let description = newVideo.getDescription();
        $('.description').text(description);
        console.log(description)
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
        $('#getLikes').click()
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
    $('#addSubtitles').click(()=>{
        let lang = prompt('Enter language');
        let transcript = prompt('Enter subtitles seprated by comma');
        newVideo.addSubtitles(lang,transcript);
        $('#getSubtitles').click()
    });

    let updateComments = (comments) => {
        console.log(comments)
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
        }//end for
    };

    $('#setDescription').click(()=>{
        let description = prompt('Enter description');
        newVideo.setDescription(description);
        $('#getDescription').click()
    });
    $('#setDuration').click(()=>{
        let duration = prompt('Enter duration');
        newVideo.setDuration(duration);
        $('#getDuration').click()
    });
    $('#setTrendingNumber').click(()=>{
        let number = prompt(`Enter trending number:`);
        newVideo.setTrendingNumber(number);
        console.log(`Trending #${newVideo.getTrendingNumber()}`)
    });
    $('#addTag').click(()=>{
        let tag = prompt('Enter tag');
        newVideo.addTag(tag);
        $('#getTags').click()
    });
    $('#removeTag').click(()=>{
        let tag = prompt('Enter tag');
        newVideo.removeTag(tag);
        $('#getTags').click()
    });
    $('#setCategory').click(()=>{
        let category = prompt('Enter categoryg');
        newVideo.setCategory(category);
        $('#getCategory').click()
    });
    $('#setLicense').click(()=>{
        let license = prompt('Enter license');
        newVideo.setLicense(license);
        $('#getLicense').click()
    });
    $('#setResolution').click(()=>{
        let resolution = prompt('Enter resolution');
        newVideo.setResolution(resolution);
        $('#getResolution').click()
    });
    $('#setMonitization').click(()=>{
        let status = prompt(`Enter 'E' to enable or 'D' to disable monitization`);
        if(status == 'E' || status == 'e'){
            status = true;
        }else if(status == 'D' || status == 'd'){
            status = false
        }else{
            alert("wrong input");
            return
        }
        newVideo.setMonitization(status);
        $('#getMonitization').click()
    });
    $('#setAgeRestriction').click(()=>{
        let status = prompt(`Enter 'E' to enable or 'D' to disable Age Restriction`);
        if(status == 'E' || status == 'e'){
            status = true;
        }else if(status == 'D' || status == 'd'){
            status = false
        }else{
            alert("wrong input");
            return
        }
        newVideo.setAgeRestriction(status);
        $('#getAgeRestriction').click()
    });
    $('#addWatchtime').click(()=>{
        let minutes = prompt('Enter watch minutes to add:');
        newVideo.addWatchtime(Number(minutes));
        console.log(newVideo.getWatchTime())
    });
    $('#addImpression').click(()=>{
        newVideo.addImpression();
        console.log(newVideo.getImpressions())
    });
    $('#setVisibility').click(()=>{
        let status = prompt(`Enter 'public' or 'private' to set visibility`);
        if(status == 'public' || status == 'Public'){
            status = 'public';
        }else if(status == 'private' || status == 'Private'){
            status = 'private'
        }else{
            alert("wrong input");
            return
        }
        newVideo.setVisibility(status);
        console.log(`Visibility: ${newVideo.getVisibility()}`)
    });

});