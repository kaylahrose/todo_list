# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

household = Todo.create(name: "household")
household.items.create(name: "Laundry")
household.items.create(name: "dishes")
household.items.create(name: "mop")

groceries = Todo.create(name: "groceries")
groceries.items.create(name: "bananas")
groceries.items.create(name: "dairy")
groceries.items.create(name: "produce")