// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * String.prototype.slice (start, end)
 *
 * @path ch15/15.5/15.5.4/15.5.4.13/S15.5.4.13_A1_T6.js
 * @description Arguments are x and number, and instance is new String, x is undefined variable
 */

//since ToInteger(undefined yelds 0)
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String("undefined").slice(x,3) !== "und") {
  $ERROR('#1: var x; new String("undefined").slice(x,3) === "und". Actual: '+new String("undefined").slice(x,3) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

