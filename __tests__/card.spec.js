import { mount } from '@vue/test-utils'
import Card from 'components/Card'

describe('Card', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Card.data).toBe('function')
    })
})