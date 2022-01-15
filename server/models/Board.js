const { builtinModules } = require('module');
const mongoose = require('mongoose');
const { runInNewContext } = require('vm');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('./User');
const saltRounds = 10;

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const boardSchema = mongoose.Schema({
  writer: {
    type: ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    maxlength: 50,
  },
  contents: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BoardSchema = mongoose.model('UserWriting', boardSchema);
module.exports = { BoardSchema };
