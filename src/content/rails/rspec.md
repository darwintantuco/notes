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

    it "is invalid without first_name" do
      user = build(:user, first_name: nil)

      expect(user).to be_invalid
    end
  end
end
```

#### Service object spec

```ruby
require "rails_helper"

RSpec.describe LoanJournal::GetNumberOfPaymentsPerYear do
  subject { described_class.new(period).call }

  describe "#call" do
    context "when period is monthly" do
      let(:period) { "monthly" }

      it "returns 12" do
        expect(subject).to eq 12
      end
    end

    context "when period is weekly" do
      let(:period) { "weekly" }

      it "returns 52" do
        expect(subject).to eq 52
      end
    end

    context "when period is fortnightly" do
      let(:period) { "fortnightly" }

      it "returns 26" do
        expect(subject).to eq 26
      end
    end

    context "when period is invalid" do
      let(:period) { "invalid_period" }

      it "raises an error" do
        expect { subject } .to raise_error(ArgumentError, /Please provide a valid period/)
      end
    end
  end
end
```
