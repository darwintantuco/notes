---
title: 'React Testing Library'
category: 'React'
path: '/react/react-testing-library'
date: '2020-04-25'
---

#### Usage

```
yarn add @testing-library/react --dev
```

You also need to configure a test runner, preferably [jest](https://jestjs.io/).

#### Basic test

```javascript
import { cleanup, render } from '@testing-library/react'
import React from 'react'

import SubmitButton from '../SubmitButton'

afterEach(cleanup)

describe('<SubmitButton />', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<SubmitButton isAdmin={true} />)

    getByTestId('submit-button')
  })
})
```

#### Matching a string

```javascript
describe('<Author />', () => {
  it('renders author name', () => {
    const { getByText } = render(<Author name='Tony Stark' />)

    getByText('Tony Stark')
  })
})
```

#### Testing non existing element

Use queryBy\*.

getBy\* throws an error if nothing is found.

```javascript
describe('<SubmitButton />', () => {
  it('should not render the component when isAdmin is false', () => {
    const { queryByTestId } = render(<SubmitButton isAdmin={false} />)

    expect(queryByTestId('submit-button')).toBeNull()
  })
})
```

#### Testing useEffect and mocking an api response

```javascript
jest.mock('../../../api/notification', () => ({
  fetchNotifications: jest.fn(() => {
    return Promise.resolve({ unreadCount: 1, notifications: [] })
  }),
}))

afterEach(cleanup)

describe('<Notifications/>', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = render(<Notifications />)

    await wait(() => getByTestId('notifications'))
  })

  it('calls fetchNotifications onmount', async () => {
    render(<Notifications {...NotificationFixture} />)

    expect(fetchNotifications).toHaveBeenCalled()
  })
})
```
