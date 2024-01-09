# Given two integers, X and Y, identify whether X<Y or X>Y or X=Y.

# Exactly one of the following lines:
# - X is less than Y
# - X is greater than Y
# - X is equal to Y

read X
read Y

if [ $X -gt $Y ]
then
    echo "X is greater than Y"
fi

if [ $X -lt $Y ]
then
    echo "X is less than Y"
fi

if [ $X -eq $Y ]
then
    echo "X is equal to Y"
fi
