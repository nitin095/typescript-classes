// defining Youtube video class
var Video = /** @class */ (function () {
    function Video(id, publisherId, title, tags, category, license, duration, uploaded, description, views, likes, dislikes, resolution, subtitles, monitization, ageRestricted, watchtime, impressions, visibility, comments) {
        var _this = this;
        this.id = id;
        this.publisherId = publisherId;
        this.title = title;
        this.tags = tags;
        this.category = category;
        this.license = license;
        this.duration = duration;
        this.uploaded = uploaded;
        this.description = description;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.resolution = resolution;
        this.subtitles = subtitles;
        this.monitization = monitization;
        this.ageRestricted = ageRestricted;
        this.watchtime = watchtime;
        this.impressions = impressions;
        this.visibility = visibility;
        this.comments = comments;
        // methods
        this.getId = function () {
            return _this.id;
        };
        this.getPublisherId = function () {
            return _this.publisherId;
        };
        this.getTitle = function () {
            return _this.title;
        };
        this.getTags = function () {
            return _this.tags;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getLicense = function () {
            return _this.license;
        };
        this.getDuration = function () {
            return _this.duration;
        };
        this.getUploadDate = function () {
            return _this.uploaded;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getSubtitles = function () {
            return _this.subtitles;
        };
        this.getResolution = function () {
            return _this.resolution;
        };
        this.getMonitization = function () {
            return _this.monitization;
        };
        this.getAgeRestriction = function () {
            return _this.ageRestricted;
        };
        this.getWatchTime = function () {
            return _this.watchtime;
        };
        this.getImpressions = function () {
            return _this.impressions;
        };
        this.getVisibility = function () {
            return _this.visibility;
        };
        this.getVideoUrl = function () {
            var url = "https://www.youtube.com/watch?v=" + _this.id;
            return url;
        };
        this.getCommentsCount = function () {
            if (_this.comments !== undefined) {
                return _this.comments.length;
            }
            return 0;
        };
        this.getEmbedCode = function () {
            return "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/" + _this.id + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
        };
        //setter methods
        this.addLike = function () {
            return _this.likes++;
        };
        this.addDislike = function () {
            return _this.dislikes++;
        };
        this.addComment = function (commentId, user, comment, date) {
            //return this.comments[this.comments.length] = comment
            if (_this.comments == undefined) {
                _this.comments = [];
            }
            return _this.comments[_this.comments.length] = { commentId: commentId, userName: user, commentBody: comment, date: date, likes: 0, dislikes: 0 };
        };
        this.addCommentLike = function (commentId) {
            if (_this.comments !== undefined) {
                for (var _i = 0, _a = _this.comments; _i < _a.length; _i++) {
                    var comment = _a[_i];
                    if (comment.commentId == commentId) {
                        return comment.likes++;
                    }
                }
            }
        };
        this.addCommentDislike = function (commentId) {
            if (_this.comments !== undefined) {
                for (var _i = 0, _a = _this.comments; _i < _a.length; _i++) {
                    var comment = _a[_i];
                    if (comment.commentId == commentId) {
                        return comment.dislikes++;
                    }
                }
            }
        };
        this.addToPlaylist = function (playlist) {
            return playlist[playlist.length] = _this.id;
        };
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
        this.visibility = visibility;
    } // end constructor
    return Video;
}()); // end class 
var today = new Date;
var newVideo = new Video("a9fsfAZ60Tk", "dk3fdjCu7fJ", "Random Title", ["smartphones", "samsung", "galaxy s9+"], "Science & Technology", "Standard Youtube License", 18, today, "this is sample description", 263000, 3600, 4500, 1080, ["Subtitles 1", "Subtitles 2"], true, false, 3433530, 5643564, "public");
newVideo.addComment("001", "User1", "Comment 1", today);
newVideo.addCommentLike("001");
newVideo.addCommentDislike("001");
console.log(newVideo.getComments());
var getRelatedVideos;
var getChannelName;
$(document).ready(function () {
    var playlist = ["id1", "id2"];
    $('#getTitle').click(function () {
        var title = newVideo.getTitle();
        $('.title').text(title);
        console.log(title);
    });
    $('#getViews').click(function () {
        var views = newVideo.getViews();
        $('.views').text(views);
        console.log(views);
    });
    $('#getLikes').click(function () {
        var likes = newVideo.getLikes();
        $('.likes').text(likes);
        console.log(likes);
    });
    $('#getDislikes').click(function () {
        var dislikes = newVideo.getDislikes();
        $('.dislikes').text(dislikes);
        console.log(dislikes);
    });
    $('#getUploadDate').click(function () {
        var uploadDate = newVideo.getUploadDate();
        var dateString = uploadDate.toLocaleString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric' });
        console.log(dateString);
        $('.uploaded').text(dateString);
    });
    $('#getVideoUrl').click(function () {
        var videoUrl = newVideo.getVideoUrl();
        $('.url').text(videoUrl);
        console.log(videoUrl);
    });
    $('#getCommentsCount').click(function () {
        var commentCount = newVideo.getCommentsCount();
        console.log(commentCount);
        $('.commentsCount').text(commentCount);
    });
    $('#getComments').click(function () {
        var comments = newVideo.getComments();
        updateComments(comments);
    });
    $('#addLike').click(function () {
        console.log("Total likes:" + newVideo.getLikes() + ". \nAdding 1 like");
        newVideo.addLike();
        var likes = newVideo.getLikes();
        $('.likes').text(likes);
        console.log("Likes: " + likes);
    });
    $('#addDislike').click(function () {
        console.log("Total dislikes:" + newVideo.getDislikes() + ". \nAdding 1 dislike");
        newVideo.addDislike();
        var dislikes = newVideo.getDislikes();
        $('.dislikes').text(dislikes);
        console.log("Dislikes: " + dislikes);
    });
    $('#addToPlaylist').click(function () {
        newVideo.addToPlaylist(playlist);
        console.log(playlist);
    });
    var commentId = 2;
    $('#addComment').click(function () {
        console.log("Total comment:" + newVideo.getCommentsCount() + "\nAdding 1 comment");
        var commentBody = prompt('Type your comment.');
        newVideo.addComment(commentId++, "UserName", commentBody, today);
        var comments = newVideo.getComments();
        updateComments(comments);
    });
    $('#addCommentLike').click(function () {
        var commentId = prompt('Enter comment id to increase like');
        newVideo.addCommentLike(commentId);
        var comments = newVideo.getComments();
        console.log(comments);
        updateComments(comments);
    });
    $('#addCommentDislike').click(function () {
        var commentId = prompt('Enter comment id to increase dislike');
        newVideo.addCommentDislike(commentId);
        var comments = newVideo.getComments();
        console.log(comments);
        updateComments(comments);
    });
    var updateComments = function (comments) {
        $('.commentsRow').text('');
        for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
            var comment = comments_1[_i];
            $('.commentsRow').append("\n                <div class=\"col-12\"><div class=\"row\">\n                    <span class=\"col-12\">" + comment.userName + " " + comment.date.toLocaleString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric' }) + "</span>\n                    <span class=\"col-12\">" + comment.commentBody + "</span>\n                    <span class=\"col-auto\"><i class=\"far fa-thumbs-up\"></i>" + comment.likes + "</span>\n                    <span class=\"col-auto\"><i class=\"far fa-thumbs-down\"></i>" + comment.dislikes + "</span>\n                    <small class=\"col text-right\">Comment Id: " + comment.commentId + "</small>\n                    </div><hr></div>");
        } //edn for
    };
});
