const testExample = [
    {
        val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: testExample[]
                        }
                    }
                }
            }
    }
]
module.exports = testExample
