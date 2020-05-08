---
category: 'Rails'
title: 'Models'
path: '/rails/models'
date: '2020-05-08'
---

#### Validations

```ruby
class Loan < ApplicationRecord
  PERIODS = %w[monthly weekly].freeze

  # money-rails
  monetize :amount_cents

  validates :amount_cents, :interest_rate, presence: true
  validates :period, inclusion: PERIODS
end
```
