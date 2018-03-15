/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @noflow
 */
'use strict';

/* eslint
  comma-dangle: [1, always-multiline],
  prefer-object-spread/prefer-object-spread: 0,
  rulesdir/no-commonjs: 0,
  */

// eslint-disable-next-line rulesdir/no-unresolved
const NodeEnvironment = require('jest-environment-node');

module.exports = class AtomJestEnvironment extends NodeEnvironment {
  setup() {
    this.global.atom = global.atom;
    return Promise.resolve();
  }
};