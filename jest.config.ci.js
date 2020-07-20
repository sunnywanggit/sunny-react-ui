const base = require('./jest.config')
module.exports = Object.assign({}, base, {
    reporters: ["jest-junit"],
    //是否收集測試覆蓋率
    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
})