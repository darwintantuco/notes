---
category: 'Elixir'
title: 'ExUnit'
path: '/elixir/ex-unit'
date: '2021-03-23'
---

- built-in in elixir
- will randomize the order of tests by default

```elixir
defmodule Sample.AccountsTest do
  use Sample.DataCase

  alias Sample.Accounts

  import ExUnit.CaptureLog

  describe "Accounts.find_user_by_id/1" do
    setup do
      user = insert(:user)

      [user: user]
    end

    test "finds a user with a valid id", %{user: %{id: user_id}} do
      assert {:ok, %User{id: ^user_id}} = Accounts.find_user_by_id(user_id)
    end
  end

  describe "Accounts.create_user/1" do
    test "creates a user when params is valid" do
      params = params_for(:user)

      assert {:ok, _user} = Accounts.create_user(params)
    end

    test "returns error tuple when params is invalid" do
      assert capture_log(fn ->
        assert {:error, _changeset} = Accounts.create_user(%{})
             end) =~ "Failed to create user"
    end
  end
end
```
