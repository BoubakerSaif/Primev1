import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import closedBeta from "../Models/closedBeta.js";

const createBetaApp = asyncHandler(async (req, res) => {
  const {
    name,
    discordId,
    age,
    prevRpExp,
    charEth,
    charBack,
    liveEmail,
    streamLink,
    steamProfile,
  } = req.body;

  try {
    const betaApp = await closedBeta.create({
      name,
      discordId,
      age,
      prevRpExp,
      charEth,
      charBack,
      liveEmail,
      streamLink,
      steamProfile,
      createdBy: req.User._id,
    });
    const player = await User.findById(req.User._id);
    if (player) {
      player.BetaStatus = "Pending";
      await player.save();
    } else {
      throw new Error("Player not found");
    }
    res.status(201).json(betaApp);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllBetaApps = asyncHandler(async (req, res) => {
  try {
    const allBetaApps = await closedBeta.find().populate("createdBy");
    res.status(200).json(allBetaApps);
  } catch (error) {
    throw new Error(error);
  }
});

const acceptBetaApp = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const betaApp = await closedBeta.findById(id).populate("createdBy");
    if (betaApp) {
      betaApp.status = "Accepted" || betaApp.status;
      const acceptedWihteApp = await betaApp.save();
      const player = await User.findById(betaApp.createdBy._id);
      if (player) {
        player.BetaStatus = "Accepted";
        await player.save();
      } else {
        throw new Error("Player not found");
      }

      res.status(201).json(acceptedWihteApp);
    } else {
      throw new Error("BetaApp Not Found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
const rejectBetaApp = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const betaApp = await closedBeta.findById(id).populate("createdBy");
    if (betaApp) {
      betaApp.status = "Rejected" || betaApp.status;
      const rejectedBetaApp = await betaApp.save();
      const player = await User.findById(betaApp.createdBy._id);
      if (player) {
        player.BetaStatus = "Rejected";
        await player.save();
      } else {
        throw new Error("Player not found");
      }

      res.status(201).json(rejectedBetaApp);
    } else {
      throw new Error("WhiteApp Not Found");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getmyBetaApp = asyncHandler(async (req, res) => {
  try {
    const myBetaApp = await closedBeta.find({
      createdBy: req.User._id,
    });
    res.json(myBetaApp);
  } catch (error) {}
});

export {
  createBetaApp,
  getAllBetaApps,
  acceptBetaApp,
  rejectBetaApp,
  getmyBetaApp,
};
