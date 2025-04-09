input.onButtonPressed(Button.A, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    150
    )
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    0
    )
})
robotbit.MotorRunDual(
robotbit.Motors.M1A,
0,
robotbit.Motors.M2A,
0
)
