const Member = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ payload: _id }, process.env.SECRET_KEY, {
        expiresIn: '2hours'
    });
}

const memberSignUp = async (req, res) => {
    const { memberName, contactNumber, birthdate, birthMonth, password } = req.body;

    try {
        console.log("memberName", memberName);

        const exists = await Member.findOne({ contactNumber });

        if (exists) {
            console.log("Hello");
            res.status(400).send("Family Member Already Exists With This Contact Number");
            return;
        }

        console.log("Hello from outside");

        const newMember = await Member.create({
            memberName,
            contactNumber,
            birthdate,
            birthMonth,
            password
        });

        console.log(newMember);

        console.log(newMember._id);

        // create JWT token
        const token = createToken(newMember._id);
        console.log(token);

        res.status(200).json({ data: "Family Member Successfully Added to Database", token, name: memberName });
    } catch (error) {
        console.log("There was some error adding the new family member");
    }
}

const memberLogIn = async (req, res) => {
    const { contactNumber, password } = req.body;

    try {
        const exists = await Member.findOne({ contactNumber });

        if (!exists) {
            res.status(400).json({ data: "Family Member With This Phone Number Not Found. Please Sign Up" });
            console.log("Family Member With This Phone Number Not Found. Please Sign Up");
            return;
        }

        if (exists.password == password) {
            const token = createToken(exists._id);

            res.status(200).json({ data: "Successful Login", token, name: exists.memberName });

            console.log("Successful Login");

            return;
        }
        else {
            res.status(400).json({ data: "Invalid Login Credentials" });

            console.log("Invalid Login Credentials");

            return;
        }
    } catch (error) {
        res.status(400).json({ data: "There is some problem with Login" });
    }
}

module.exports = { memberSignUp, memberLogIn };