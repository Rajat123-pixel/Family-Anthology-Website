const mongoose = require("mongoose");

// importing models
const Story = require("../models/anthologyModel");
const Member = require("../models/userModel.js");

const getStoryDraft = async (req, res) => {
    const memberId = req.user;

    try {
        const story = await Story.findOne({ memberId });

        console.log("Member ID: " + memberId);
        console.log("Story: " + story);

        if (story)
            res.status(200).json({ data: story });
        else
            res.status(200).json({ data: "" });

        return;
    } catch (error) {
        return res.status(500).json({ data: "There was some error retrieving your document. Please try again later. Thank You." });
    }
}

const postStoryDraft = async (req, res) => {
    const memberId = req.user;

    try {
        const { story } = req.body;

        var storyDraft;
        // const storyDraft = await Story.create({ memberId, story });

        if (await Story.findOne({ memberId })) {
            storyDraft = await Story.findOneAndUpdate({
                memberId
            }, {
                story
            }, {
                new: true
            })
        }
        else {
            console.log("For Silpi");
            storyDraft = await Story.create({
                memberId,
                story
            })
        }

        console.log("Member ID: " + memberId);
        console.log("Story: " + story);
        console.log("storyDraft saved object");
        console.log(storyDraft);

        return res.status(200).json({ data: "Your work has been saved. Thanks!" });
    } catch (error) {
        return res.status(500).json({ data: "There was some error saving your work. Please try again later. Thank You." });
    }


    console.log("postStoryDraft");
}

const getOtherUserStories = async (req, res) => {
    try {
        const stories = await Story.find({});
        // const members = await Member.find({});

        console.log("stories");
        console.log(stories);

        // console.log("members");
        // console.log(members);

        const otherUserStories = await Promise.all(stories.map(async (story) => {
            try {
                const member = await Member.findOne(story.memberId);
                console.log("member in map function: " + member);
                return {
                    memberName: member.memberName,
                    story: story.story
                }
            } catch (error) {
                console.log(error);
            }
        }));
        
        console.log("otherUserStories: ");
        console.log(otherUserStories);

        res.json(otherUserStories).status(200);

        return ;
    } catch (error) {
        console.log("There was some error fetching other member's stories");
    }
}

module.exports = { getStoryDraft, postStoryDraft, getOtherUserStories };