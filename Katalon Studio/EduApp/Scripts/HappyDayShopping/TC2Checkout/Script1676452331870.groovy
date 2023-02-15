import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable

Mobile.startApplication('D:\\eduwork-git-putri_salsabila\\Katalon Studio\\EduApp\\mobileapp\\Happy Day Shopping_1.2_Apkpure.apk', 
    true)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.view.ViewGroup0'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.view.ViewGroup0 (1)'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/ButtonAddToBag'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.ImageView0'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.view.ViewGroup0 (1) (1)'), 0)

Mobile.setText(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.EditText0'), 'p.salsabila1001@gmail.com', 
    0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.Button0 - Checkout'), 0)

Mobile.setText(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.EditText0 (1)'), 'Putri Salsabila', 0)

Mobile.setText(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.EditText0 (2)'), '0987654321', 0)

Mobile.setText(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.EditText0 (3)'), 'Cisempur, Jatinangor', 
    0)

Mobile.setText(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.EditText0 (4)'), 'Kab Sumedang', 0)

Mobile.tap(findTestObject('mobile/android.widget.EditText0 - Jakarta Raya'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.CheckedTextView0 - Jawa Barat'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.view.View0 - Please choose'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.CheckedTextView0 - AMERAT'), 0)

Mobile.tap(findTestObject('mobile/HappyDayShopping/Checkout/android.widget.Button0 - Continue'), 0)

Mobile.getText(findTestObject('mobile/HappyDayShopping/Checkout/android.view.View0 - Shipping and delivery methods'), 0)

Mobile.closeApplication()

