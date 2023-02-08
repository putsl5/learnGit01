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

Mobile.startApplication('mobileapp/Calculator_v8.1.apk', false)

Mobile.tap(findTestObject('mobile/angka4'), 0)

Mobile.tap(findTestObject('mobile/tambah'), 0)

Mobile.tap(findTestObject('mobile/angka5'), 0)

Mobile.tap(findTestObject('mobile/kali'), 0)

Mobile.tap(findTestObject('mobile/angka8'), 0)

Mobile.tap(findTestObject('mobile/bagi'), 0)

Mobile.tap(findTestObject('mobile/angka2'), 0)

Mobile.tap(findTestObject('mobile/samaDengan'), 0)

Mobile.tap(findTestObject('mobile/ACpembersih'), 0)

Mobile.tap(findTestObject('mobile/akar'), 0)

Mobile.tap(findTestObject('mobile/angka9'), 0)

Mobile.tap(findTestObject('mobile/kurang'), 0)

Mobile.tap(findTestObject('mobile/angka1'), 0)

Mobile.tap(findTestObject('mobile/samaDengan'), 0)

Mobile.tap(findTestObject('mobile/threeButton'), 0)

Mobile.tap(findTestObject('mobile/menuHistory'), 0)

Mobile.tap(findTestObject('mobile/backHistory'), 0)

Mobile.tap(findTestObject('mobile/ACpembersih'), 0)

Mobile.closeApplication()

