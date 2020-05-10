---
category: 'Rails'
title: 'Rspec'
path: '/rails/rspec'
date: '2020-05-10'
---

#### Model spec

```ruby
RSpec.describe User, type: :model do
  # factory :user exists
  let!(:user) { build :user }

  context "with assocations" do
    it { is_expected.to belong_to(:organization) }
  end

  context "when validated" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end
  end
end
```
