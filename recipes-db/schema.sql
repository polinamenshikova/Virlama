DROP TABLE IF EXISTS Ingredients;
DROP TABLE IF EXISTS Instructions;
DROP TABLE IF EXISTS Recipes;

CREATE TABLE Recipes (
    recipe_id INT PRIMARY KEY,
    recipe_name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Ingredients (
    ingredient_id INT PRIMARY KEY,
    ingredient_name VARCHAR(255) NOT NULL,
    quantity VARCHAR(50) NOT NULL,
    recipe_id INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id)
);

CREATE TABLE Instructions (
    instruction_id INT PRIMARY KEY,
    step_number INT NOT NULL,
    instruction_text TEXT NOT NULL,
    recipe_id INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id)
);

INSERT INTO Recipes (recipe_id, recipe_name, description, image_url) VALUES
(1, 'Balsamic Chicken Caprese', 'A delicious chicken dish with mozzarella, tomatoes, and balsamic glaze.', 'https://example.com/images/balsamic-chicken-caprese.jpg'),
(2, 'Spaghetti Carbonara', 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.', 'https://example.com/images/spaghetti-carbonara.jpg'),
(3, 'Chicken Alfredo', 'Creamy pasta with grilled chicken and Alfredo sauce.', 'https://example.com/images/chicken-alfredo.jpg'),
(4, 'Beef Stroganoff', 'Tender beef strips in a creamy mushroom sauce served over noodles.', 'https://example.com/images/beef-stroganoff.jpg'),
(5, 'Chicken Parmesan', 'Breaded chicken breast topped with marinara sauce and melted cheese.', 'https://example.com/images/chicken-parmesan.jpg'),
(6, 'Shrimp Scampi', 'Garlic butter shrimp served over pasta.', 'https://example.com/images/shrimp-scampi.jpg'),
(7, 'Vegetable Stir Fry', 'A colorful mix of vegetables stir-fried in a savory sauce.', 'https://example.com/images/vegetable-stir-fry.jpg'),
(8, 'Chicken Tikka Masala', 'Grilled chicken in a creamy, spiced tomato sauce.', 'https://example.com/images/chicken-tikka-masala.jpg'),
(9, 'Beef Tacos', 'Spiced ground beef served in a taco shell with toppings.', 'https://example.com/images/beef-tacos.jpg'),
(10, 'Margherita Pizza', 'Classic pizza with tomato sauce, fresh mozzarella, and basil.', 'https://example.com/images/margherita-pizza.jpg');

INSERT INTO Ingredients (ingredient_id, ingredient_name, quantity, recipe_id) VALUES
(1, 'Chicken breasts', '2', 1),
(2, 'Olive oil', '1 tbsp', 1),
(3, 'Mozzarella cheese', '4 slices', 1),
(4, 'Cherry tomatoes', '1 cup, halved', 1),
(5, 'Balsamic glaze', '1/4 cup', 1),
(6, 'Spaghetti', '400g', 2),
(7, 'Pancetta', '150g, diced', 2),
(8, 'Parmesan cheese', '1/2 cup, grated', 2),
(9, 'Eggs', '2', 2),
(10, 'Chicken breast', '2', 3);

INSERT INTO Instructions (instruction_id, step_number, instruction_text, recipe_id) VALUES
(1, 1, 'Season chicken with salt and pepper.', 1),
(2, 2, 'Heat olive oil in a skillet over medium heat.', 1),
(3, 3, 'Cook chicken until golden brown on both sides.', 1),
(4, 4, 'Top with mozzarella and cherry tomatoes, then cover and cook until cheese is melted.', 1),
(5, 5, 'Drizzle with balsamic glaze and serve.', 1),
(6, 1, 'Cook spaghetti according to package instructions.', 2),
(7, 2, 'Cook pancetta in a skillet until crispy.', 2),
(8, 3, 'Whisk eggs and Parmesan together in a bowl.', 2),
(9, 4, 'Combine pasta, pancetta, and egg mixture, then toss well.', 2),
(10, 5, 'Serve with extra Parmesan on top.', 2);
