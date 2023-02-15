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

Mobile.startApplication('mobileapp/HappyDayShopping_1.2.apk', false)

Mobile.setText(findTestObject('mobile/DayShop/Checkout/android.widget.EditText0'), 'p.salsabila1001@gmail.com', 0)

Mobile.tap(findTestObject('mobile/DayShop/ShippingAndDelivery/android.widget.Button0 - Checkout'), 0)

Mobile.setText(findTestObject('mobile/DayShop/ShippingAndDelivery/FullName'), 'putri salsabila', 0)

Mobile.setText(findTestObject('mobile/DayShop/ShippingAndDelivery/Phone'), '0987654321', 0)

Mobile.setText(findTestObject('mobile/DayShop/ShippingAndDelivery/city'), 'kab sumedang', 0)

Mobile.tap(findTestObject('mobile/DayShop/ShippingAndDelivery/dropdown'), 0)

Mobile.tap(findTestObject('mobile/DayShop/ShippingAndDelivery/android.widget.CheckedTextView0 - Jawa Barat'), 0)

Mobile.tap(findTestObject('mobile/DayShop/ShippingAndDelivery/dropdown2'), 0)

Mobile.tap(findTestObject('mobile/DayShop/ShippingAndDelivery/android.widget.CheckedTextView0 - AMERAT'), 0)

Mobile.tap(findTestObject('mobile/DayShop/ShippingAndDelivery/android.widget.Button0 - Continue'), 0)

Mobile.getText(findTestObject('mobile/DayShop/ShippingAndDelivery/android.widget.TextView0 - Shipping and delivery methods'), 
    0)

