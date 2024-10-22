const router = require("express").Router();

// importing controller functions
const {
    getStoryDraft,
    postStoryDraft,
    getOtherUserStories
} = require("../controllers/anthology");

// importing middleware function
const {
    authFun
} = require("../middlewares/requireAuth.js");

// implementing middleware for all routes in this page
router.use(authFun);

// to fetch saved draft of member story
router.get("/secured/story", getStoryDraft);

// to post draft of member story
router.patch("/secured/story", postStoryDraft);

// to fetch other members' story
router.get("/secured/stories", getOtherUserStories);

module.exports = router;