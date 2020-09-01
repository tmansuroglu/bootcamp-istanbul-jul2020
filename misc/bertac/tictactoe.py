# write your code here
import random

cells = "           "  # input("Enter cells: ")
board = [[cells[0], cells[1], cells[2]],
         [cells[3], cells[4], cells[5]],
         [cells[6], cells[7], cells[8]]]

condition = True  # global var to store a condition for the while loop in the game func.


def show_board():
    print(f"""---------
| {board[0][0]} {board[0][1]} {board[0][2]} |
| {board[1][0]} {board[1][1]} {board[1][2]} |
| {board[2][0]} {board[2][1]} {board[2][2]} |
---------""")


# show_board()


def sign(count):
    if count % 2 == 0:
        return "X"
    return "O"


def check_sign(_sign):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == _sign \
                or board[0][i] == board[1][i] == board[2][i] == _sign \
                or board[0][0] == board[1][1] == board[2][2] == _sign \
                or board[0][2] == board[1][1] == board[2][0] == _sign:
            return True


def check_win():
    global condition
    if check_sign("X"):
        print("X wins")
        condition = False
    elif check_sign("O"):
        print("O wins")
        condition = False
    elif " " not in board[0] and " " not in board[1] and " " not in board[2]:
        print("Draw")
        condition = False


def computer_medium_mode(sign):
    for i in range(3):
        if board[i][0] == board[i][1] == sign and board[i][2] == " " and board[i][1] != " ":
            board[i][2] = sign
            print('Making move level "medium"')
            return board[i][2]
        elif board[i][1] == board[i][2] == sign and board[i][0] == " " and board[i][1] != " ":
            board[i][0] = sign
            print('Making move level "medium"')
            return board[i][0]

        elif board[i][0] == board[i][2] == sign and board[i][1] == " " and board[i][0] != " ":
            board[i][1] = sign
            print('Making move level "medium"')
            return board[i][1]

        elif board[0][i] == board[1][i] == sign and board[2][i] == " " and board[1][i] != " ":
            board[2][i] = sign
            print('Making move level "medium"')
            return board[2][i]

        elif board[1][i] == board[2][i] == sign and board[0][i] == " " and board[1][i] != " ":
            board[0][i] = sign
            print('Making move level "medium"')
            return board[0][i]

        elif board[0][i] == board[2][i] == sign and board[1][i] == " " and board[0][i] != " ":
            board[1][i] = sign
            print('Making move level "medium"')
            return board[1][i]


        elif board[0][0] == board[1][1] == sign and board[2][2] == " " and board[1][1] != " ":
            board[2][2] = sign
            print('Making move level "medium"')
            return board[2][2]

        elif board[1][1] == board[2][2] == sign and board[0][0] == " " and board[1][1] != " ":
            board[0][0] = sign
            print('Making move level "medium"')
            return board[0][0]

        elif board[0][0] == board[2][2] == sign and board[1][1] == " " and board[0][0] != " ":
            board[1][1] = sign
            print('Making move level "medium"')
            return board[1][1]

        elif board[0][2] == board[1][1] == sign and board[2][0] == " " and board[1][1] != " ":
            board[2][0] = sign
            print('Making move level "medium"')
            return board[2][0]

        elif board[1][1] == board[2][0] == sign and board[0][2] == " " and board[1][1] != " ":
            board[0][2] = sign
            print('Making move level "medium"')
            return board[0][2]

        elif board[0][2] == board[2][0] == sign and  board[1][1] == " " and board[0][2] != " ":
            board[1][1] = sign
            print('Making move level "medium"')
            return board[1][1]


        elif board[i][0] == board[i][1] != sign and board[i][2] == " " and board[i][1] != " ":
            board[i][2] = sign
            print('Making move level "medium"')
            return board[i][2]

        elif board[i][1] == board[i][2] != sign and board[i][0] == " " and board[i][1] != " ":
            board[i][0] = sign
            print('Making move level "medium"')
            return board[i][0]

        elif board[i][0] == board[i][2] != sign and board[i][1] == " " and board[i][0] != " ":
            board[i][1] = sign
            print('Making move level "medium"')
            return board[i][1]

        elif board[0][i] == board[1][i] != sign and board[2][i] == " " and board[1][i] != " ":
            board[2][i] = sign
            print('Making move level "medium"')
            return board[2][i]

        elif board[1][i] == board[2][i] != sign and board[0][i] == " " and board[1][i] != " ":
            board[0][i] = sign
            print('Making move level "medium"')
            return board[0][i]

        elif board[0][i] == board[2][i] != sign and board[1][i] == " " and board[0][i] != " ":
            board[1][i] = sign
            print('Making move level "medium"')
            return board[1][i]


        elif board[0][0] == board[1][1] != sign and board[2][2] == " " and board[1][1] != " ":
            board[2][2] = sign
            print('Making move level "medium"')
            return board[2][2]

        elif board[1][1] == board[2][2] != sign and board[0][0] == " " and board[1][1] != " ":
            board[0][0] = sign
            print('Making move level "medium"')
            return board[0][0]

        elif board[0][0] == board[2][2] != sign and board[1][1] == " " and board[0][0] != " ":
            board[1][1] = sign
            print('Making move level "medium"')
            return board[1][1]

        elif board[0][2] == board[1][1] != sign and board[2][0] == " " and board[1][1] != " ":
            board[2][0] = sign
            print('Making move level "medium"')
            return board[2][0]

        elif board[1][1] == board[2][0] != sign and board[0][2] == " " and board[1][1] != " ":
            board[0][2] = sign
            print('Making move level "medium"')
            return board[0][2]

        elif board[0][2] == board[2][0] != sign and  board[1][1] == " " and board[0][2] != " ":
            board[1][1] = sign
            print('Making move level "medium"')
            return board[1][1]

        else:
            print("random move")
            random_row = random.randint(0, 2)
            random_column = random.randint(0, 2)
            if board[random_row][random_column] == " ":
                board[random_row][random_column] = sign
                break



def computer_easy_mode(stop_condition, sign):
    random_row = random.randint(0, 2)
    random_column = random.randint(0, 2)
    if board[random_row][random_column] == " ":
        print('Making move level "easy"')
        board[random_row][random_column] = sign
        return board[random_row][random_column]
    elif not stop_condition:  # checkpoint to stop the recursion
        pass
    else:
        computer_easy_mode(stop_condition, sign)


def reset_board():
    global board
    for i in range(3):
        for j in range(3):
            board[i][j] = " "


def game_w_comp(type, sign1, sign2):
    while condition:
        x, y = input("Enter the coordinates: ").split()

        if x.isdigit() is False or y.isdigit() is False:
            print("You should enter numbers!")

        elif int(x) > 3 or int(x) < 1 or int(y) < 1 or int(y) > 3:
            print("Coordinates should be from 1 to 3!")

        elif x == "1" and y == "1" and board[2][0] == " ":
            board[2][0] = sign1

        elif x == "1" and y == "2" and board[1][0] == " ":
            board[1][0] = sign1

        elif x == "1" and y == "3" and board[0][0] == " ":
            board[0][0] = sign1


        elif x == "2" and y == "1" and board[2][1] == " ":
            board[2][1] = sign1

        elif x == "2" and y == "2" and board[1][1] == " ":
            board[1][1] = sign1

        elif x == "2" and y == "3" and board[0][1] == " ":
            board[0][1] = sign1


        elif x == "3" and y == "1" and board[2][2] == " ":
            board[2][2] = sign1


        elif x == "3" and y == "2" and board[1][2] == " ":
            board[1][2] = sign1


        elif x == "3" and y == "3" and board[0][2] == " ":
            board[0][2] = sign1


        else:  # if the cell occupied
            print("This cell is occupied! Choose another one!")
        show_board()
        check_win()
        if type == "easy":
            computer_easy_mode(condition, sign2)
        elif type == "medium":
            computer_medium_mode(sign2)
        elif type == "hard":
            pass
        show_board()
        check_win()


def game_w_users():
    count = 0
    while condition:

        x, y = input("Enter the coordinates: ").split()

        if x.isdigit() is False or y.isdigit() is False:
            print("You should enter numbers!")

        elif int(x) > 3 or int(x) < 1 or int(y) < 1 or int(y) > 3:
            print("Coordinates should be from 1 to 3!")

        elif x == "1" and y == "1" and board[2][0] == " ":
            board[2][0] = sign(count)

        elif x == "1" and y == "2" and board[1][0] == " ":
            board[1][0] = sign(count)


        elif x == "1" and y == "3" and board[0][0] == " ":
            board[0][0] = sign(count)


        elif x == "2" and y == "1" and board[2][1] == " ":
            board[2][1] = sign(count)

        elif x == "2" and y == "2" and board[1][1] == " ":
            board[1][1] = sign(count)


        elif x == "2" and y == "3" and board[0][1] == " ":
            board[0][1] = sign(count)



        elif x == "3" and y == "1" and board[2][2] == " ":
            board[2][2] = sign(count)


        elif x == "3" and y == "2" and board[1][2] == " ":
            board[1][2] = sign(count)


        elif x == "3" and y == "3" and board[0][2] == " ":
            board[0][2] = sign(count)


        else:  # if the cell occupied
            print("This cell is occupied! Choose another one!")

        show_board()
        check_win()
        count += 1

def easy_vs_medium(count, sign1, sign2):
        if count % 2 == 0:
            print(1)
            computer_easy_mode(condition,sign1)

        else:
            print(2)
            computer_medium_mode(sign2)
        show_board()
        check_win()

def menu():
    global condition
    while True:
        i = input("Input command: ")
        if i == "start easy easy":
            show_board()
            count = 0
            while condition:
                computer_easy_mode(condition, sign(count))
                show_board()
                check_win()
                count += 1
        elif i == "start medium medium":
            show_board()
            count = 0
            while condition:
                computer_medium_mode(sign(count))
                show_board()
                check_win()
                count += 1
        elif i == "start user medium":
            show_board()
            game_w_comp("medium", "X", "O")
        elif i == "start medium user":
            show_board()
            game_w_comp("medium", "O", "X")
        elif i == "start medium easy":
            show_board()
            count = 0
            while condition:
                easy_vs_medium(count,"O","X")
                count += 1
        elif i == "start easy medium":
            show_board()
            count = 0
            while condition:
                easy_vs_medium(count,"X","O")
                count += 1
        elif i == "start easy user":
            show_board()
            game_w_comp("easy", "O", "X")
        elif i == "start user easy":
            show_board()
            game_w_comp("easy", "X", "O")
        elif i == "start user user":
            show_board()
            game_w_users()
        elif i == "exit":
            break
        else:
            print("Bad parameters!")
        reset_board()
        condition = True


menu()
