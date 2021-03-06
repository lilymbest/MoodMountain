const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  themeColors: Array,
  themeColor: {
    type: String,
    default: '#D17B88'
  },
  themeIcon: {
    type: String,
    default: 'images/MoodMountain.png'
  },
  euphoricIcon: {
    type: String,
    default: 'images/moodIcons/Default/euphoricDefault.png'
  },
  happyIcon: {
    type: String,
    default: 'images/moodIcons/Default/happyDefault.png'
  },
  neutralIcon:{
    type: String,
    default: 'images/moodIcons/Default/neutralDefault.png'
  },
  tenseIcon: {
    type: String,
    default: 'images/moodIcons/Default/tenseDefault.png'
  },
  sadIcon: {
    type: String,
    default: 'images/moodIcons/Default/zsadDefault.png'
  },
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
  // 'this' will be set to the current document
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  // 'this' represents the document that you called comparePassword on
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);