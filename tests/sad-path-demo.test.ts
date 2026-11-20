// TEMPORARY FILE FOR THE ASSIGNMENT 3 SAD-PATH DEMONSTRATION.
// This test intentionally fails so the GitHub Actions run stops at the test step
// and the SonarQube Cloud scan is skipped. Delete this file after capturing evidence.
import { describe, expect, test } from 'bun:test'

describe('CI sad-path demonstration', () => {
  test('fails on purpose so the scan step never runs', () => {
    expect('upstream reachable').toBe('upstream unreachable')
  })
})
