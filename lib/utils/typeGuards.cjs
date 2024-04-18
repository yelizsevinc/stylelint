// NOTICE: This file is generated by Rollup. To modify it,
// please instead edit the ESM counterpart and rebuild with Rollup (npm run build).
'use strict';

/** @typedef {import('postcss').Node} Node */
/** @typedef {import('postcss').Source} NodeSource */

/**
 * @param {Node} node
 * @returns {node is import('postcss').Root}
 */
function isRoot(node) {
	return node.type === 'root';
}

/**
 * @param {Node} node
 * @returns {node is import('postcss').Rule}
 */
function isRule(node) {
	return node.type === 'rule';
}

/**
 * @param {Node} node
 * @returns {node is import('postcss').AtRule}
 */
function isAtRule(node) {
	return node.type === 'atrule';
}

/**
 * @param {Node} node
 * @returns {node is import('postcss').Comment}
 */
function isComment(node) {
	return node.type === 'comment';
}

/**
 * @param {Node} node
 * @returns {node is import('postcss').Declaration}
 */
function isDeclaration(node) {
	return node.type === 'decl';
}

/**
 * @param {Node} node
 * @returns {node is import('postcss').Document}
 */
function isDocument(node) {
	return node.type === 'document';
}

/**
 * @param {import('postcss-value-parser').Node} node
 * @returns {node is import('postcss-value-parser').FunctionNode}
 */
function isValueFunction(node) {
	return node.type === 'function';
}

/**
 * @param {import('postcss-value-parser').Node} node
 * @returns {node is import('postcss-value-parser').WordNode}
 */
function isValueWord({ type }) {
	return type === 'word';
}

/**
 * @param {Node} node
 * @returns {node is (Node & {source: NodeSource})}
 */
function hasSource(node) {
	return Boolean(node.source);
}

exports.hasSource = hasSource;
exports.isAtRule = isAtRule;
exports.isComment = isComment;
exports.isDeclaration = isDeclaration;
exports.isDocument = isDocument;
exports.isRoot = isRoot;
exports.isRule = isRule;
exports.isValueFunction = isValueFunction;
exports.isValueWord = isValueWord;
