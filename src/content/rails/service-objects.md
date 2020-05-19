---
category: 'Rails'
title: 'Service Objects'
path: '/rails/service-objects'
date: '2020-05-19'
---

#### Sample

```ruby
module LoanJournal
  class GetNumberOfPaymentsPerYear
    def initialize(period)
      @period = period
    end

    def call
      case period
      when "monthly"
        12
      when "weekly"
        52
      when "fortnightly"
        26
      else
        raise ArgumentError, "Please provide a valid period"
      end
    end

    private

      attr_reader :period
  end
end
```
