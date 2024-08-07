/*! References to the literature (docs only).

This module contains references cited in the docs for this crate. It is only
built when the crate is compiled with the `doc` feature and is not intended for
any purpose besides documentation.
 */

// NOTE: Preferably this data would be recorded in a structured way, e.g., as
// constant structs of some type `Reference`. This works fine in Rust but it
// doesn't produce usable docs because rustdoc doesn't display constants except
// in certain special cases.
//
// - https://github.com/rust-lang/rust/pull/98814
// - https://github.com/rust-lang/rust/issues/98929

/** Reference: Cartesian double theories.

Lambert & Patterson, 2024. Cartesian double theories: A double-categorical
framework for categorical doctrines.

- [DOI:10.1016/j.aim.2024.109630](https://doi.org/10.1016/j.aim.2024.109630)
- [arXiv:2310.05384](https://arxiv.org/abs/2310.05384)
 */
pub const CartDblTheories: () = ();

/** Reference: Products in double categories, revisited.

Patterson, 2024: Products in double categories, revisited.

- [arXiv:2401.08990](https://arxiv.org/abs/2401.08990)
 */
pub const DblProducts: () = ();

/** Reference: Model structures for double categories.

Fiore, Paoli, Pronk, 2008: Model structures on the category of small double
categories.

- [DOI:10.2140/agt.2008.8.1855](https://doi.org/10.2140/agt.2008.8.1855)
- [arXiv:0711.0473](https://arxiv.org/abs/0711.0473)
 */
pub const ModelStructureDblCat: () = ();

/** Reference: Word problem for double categories.

Delpeuch, 2020: The word problem for double categories.

- [TAC-35-1](http://www.tac.mta.ca/tac/volumes/35/1/35-01abs.html)
- [arXiv:1907.09927](https://arxiv.org/abs/1907.09927)
 */
pub const WordProblemDblCats: () = ();

/** Reference: Word problem for computads.

Makkai, 2005: The word problem for computads.

<https://www.math.mcgill.ca/makkai/WordProblem/>
 */
pub const MakkaiComputads: () = ();

/** Reference: Computads and 2-dimensional pasting diagrams.

Makkai, 2007: Computads and 2-dimensional pasting diagrams.

<https://www.math.mcgill.ca/makkai/2dcomputads/>
 */
pub const MakkaiComputadsPasting: () = ();