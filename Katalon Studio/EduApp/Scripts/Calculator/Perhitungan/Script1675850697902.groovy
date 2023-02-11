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

Mobile.tap(findTestObject('mobile/Calculator/angka4'), 0)

Mobile.tap(findTestObject('mobile/Calculator/tambah'), 0)

Mobile.tap(findTestObject('mobile/Calculator/angka5'), 0)

Mobile.tap(findTestObject('mobile/Calculator/kali'), 0)

Mobile.tap(findTestObject('mobile/Calculator/angka8'), 0)

Mobile.tap(findTestObject('mobile/Calculator/bagi'), 0)

Mobile.tap(findTestObject('mobile/Calculator/angka2'), 0)

Mobile.tap(findTestObject('mobile/Calculator/samaDengan'), 0)

Mobile.tap(findTestObject('mobile/Calculator/ACpembersih'), 0)

Mobile.tap(findTestObject('mobile/Calculator/akar'), 0)

Mobile.tap(findTestObject('mobile/Calculator/angka9'), 0)

Mobile.tap(findTestObject('mobile/Calculator/kurang'), 0)

Mobile.tap(findTestObject('mobile/Calculator/angka1'), 0)

Mobile.tap(findTestObject('mobile/Calculator/samaDengan'), 0)

Mobile.tap(findTestObject('mobile/Calculator/threeButton'), 0)

Mobile.tap(findTestObject('mobile/Calculator/menuHistory'), 0)

Mobile.tap(findTestObject('mobile/Calculator/backHistory'), 0)

Mobile.tap(findTestObject('mobile/Calculator/ACpembersih'), 0)

Mobile.closeApplication()

