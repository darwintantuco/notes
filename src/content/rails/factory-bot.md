---
category: 'Rails'
title: 'FactoryBot'
path: '/react/factory-bot'
date: '2020-05-10'
---

#### Examples

```ruby
FactoryBot.define do
  factory :user do
    first_name { "Tony" }
    last_name { "Stark" }
    sequence(:email) { |n| "user#{n}@email.com" }

    trait :admin do
      role { "admin" }
    end
  end
end
```
