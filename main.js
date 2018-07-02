var Video = /** @class */ (function () {
    function Video(id, publisherId, title, tags, category, license, duration, uploaded, description, views, likes, dislikes, resolution, monitization, ageRestricted, watchtime, impressions, visibility, trendingNumber, subtitles, comments) {
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
        this.monitization = monitization;
        this.ageRestricted = ageRestricted;
        this.watchtime = watchtime;
        this.impressions = impressions;
        this.visibility = visibility;
        this.trendingNumber = trendingNumber;
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
            if (_this.comments == undefined) {
                return 0;
            }
            else {
                return _this.comments;
            }
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
        this.getTrendingNumber = function () {
            if (_this.trendingNumber == undefined) {
                return 0;
            }
            else {
                return _this.trendingNumber;
            }
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
        this.addView = function () {
            return _this.views++;
        };
        this.addComment = function (commentId, user, comment, date) {
            if (_this.comments == undefined) {
                _this.comments = [];
            }
            return _this.comments.push({ commentId: commentId, userName: user, commentBody: comment, date: date, likes: 0, dislikes: 0 });
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
            playlist[playlist.length] = _this.id;
        };
        this.setTitle = function (title) {
            _this.title = title;
        };
        this.setDuration = function (duration) {
            _this.duration = duration;
        };
        this.addTag = function (tag) {
            _this.tags.push(tag);
        };
        this.removeTag = function (tag) {
            _this.tags.splice(_this.tags.indexOf(tag), 1);
        };
        this.setCategory = function (category) {
            _this.category = category;
        };
        this.setLicense = function (license) {
            _this.license = license;
        };
        this.setDescription = function (description) {
            _this.description = description;
        };
        this.addSubtitles = function (lang, transcript) {
            _this.subtitles.push({ lang: lang, transcript: transcript.split(",") });
        };
        this.setTrendingNumber = function (number) {
            _this.trendingNumber = number;
        };
        this.setResolution = function (resolution) {
            _this.resolution = resolution;
        };
        this.setMonitization = function (yesOrNo) {
            _this.monitization = yesOrNo;
        };
        this.setAgeRestriction = function (yesOrNo) {
            _this.ageRestricted = yesOrNo;
        };
        this.addWatchtime = function (minutes) {
            _this.watchtime += minutes;
        };
        this.addImpression = function () {
            _this.impressions++;
        };
        this.setVisibility = function (visibility) {
            _this.visibility = visibility;
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
        this.trendingNumber = trendingNumber;
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
var newVideo;
var videoButton = function () {
    newVideo = new Video("a9fsfAZ60Tk", "dk3fdjCu7fJ", "Random Title", ["smartphones", "samsung", "galaxy s9+"], "Science & Technology", "Standard Youtube License", 18, today, "this is sample description", 263000, 3600, 4500, 1080, true, false, 3433530, 5643564, "public", 9, [{ lang: "en-IN", transcript: ["line 1", "line 2"] }]);
    console.log("Title: " + newVideo.getTitle());
    console.log("Views: " + newVideo.getViews());
    console.log("Likes: " + newVideo.getLikes());
    console.log("Dislikes: " + newVideo.getDislikes());
    console.log("Uploaded on: " + newVideo.getUploadDate());
    console.log("Title: " + newVideo.getTitle());
    console.log("Video url: " + newVideo.getVideoUrl());
    console.log("Number of comments: " + newVideo.getCommentsCount());
    console.log("Trending #" + newVideo.getTrendingNumber());
    console.log('Comments:');
    console.log(newVideo.getComments());
    console.log('Adding a comment:');
    newVideo.addComment("001", "User1", "Comment 1", today);
    newVideo.addCommentLike("001");
    newVideo.addCommentDislike("001");
    console.log(newVideo.getComments());
    console.log("Playlist:");
    var playlist = ["videoId001", "videoId002"];
    console.log(playlist);
    console.log("Adding this video to playlist:");
    newVideo.addToPlaylist(playlist);
    console.log(playlist);
};
