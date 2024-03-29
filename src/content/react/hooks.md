---
category: 'React'
title: 'Hooks'
path: '/react/hooks'
date: '2020-04-27'
---

- use all react features without a class
- reuse stateful logic between components

#### Rules

- hooks should be defined at the top of the component
- can't be put inside if else

```javascript
import React, { useState, useEffect } from 'react'

const MessagingSection = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchMessages
      .then((res) => {
        setMessages(res.data.message)
      })
      .catch((err) => {
        // handle errors
      })
  }, [])

  return (
    <div>
      <Messages messages={messages} />
      <AddMessage />
    </div>
  )
}

export default MessagingSection
```
