import unittest

from Popsicles import togive

class TestOutput(unittest.TestCase):
    def test_list_init(self):
        """
        Test the output
        """
        data1 = 3
        data2 = 9
        result = togive(data1,data2)
        self.assertEqual(result,'give away')
if __name__ == '__main__':
    unittest.main()



