//Program to show Sum of three Integer adds to ZERO
let a=[-1,-2,1,2,-3];
let b=5;

for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        for (l = j + 1; l < a.length; l++) {
            if (a[i] + a[j] + a[l] == 0) {
                console.log("Found 3 elements whose sum is = 0");
               console.log("Elements are " + a[i] + " " + a[j] + " " + a[l]);
                return;
            }
        }
    }
}