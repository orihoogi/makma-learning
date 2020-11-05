from imageai.Prediction.Custom import ModelTraining
import os, sys, shutil
from imageai.Prediction.Custom import CustomImagePrediction

def main(imgPath, username):
    print(username)
    cwd = os.getcwd()
    model_trainer = ModelTraining()
    model_trainer.setModelTypeAsResNet()
    print(os.path.join(cwd, "images\\" + username))
    model_trainer.setDataDirectory(os.path.join(cwd, "images\\" + username))
    model_trainer.trainModel(num_objects=2, num_experiments=1, enhance_data=True, batch_size=3, show_network_summary=False)

    prediction = CustomImagePrediction()
    model_name = os.listdir(os.path.join(cwd, "images\\" + username + "\\models"))[0];
    prediction.setModelPath(model_path=os.path.join(cwd, "images\\" + username + "\\models\\" + model_name))
    prediction.setJsonPath(model_json=os.path.join(cwd, "images\\" + username + "\\json\\model_class.json"))
    prediction.setModelTypeAsResNet()
    prediction.loadModel(num_objects=2)
    predictions, probabilities = prediction.predictImage(imgPath, result_count=2)


    for eachPrediction, eachProbability in zip(predictions, probabilities):
        # res = res, eachPrediction, " : ", eachProbability
        print(eachPrediction, " : ", eachProbability)

    shutil.rmtree(os.path.join(cwd, "images\\" + username + "\\models"))
    shutil.rmtree(os.path.join(cwd, "images\\" + username + "\\logs"))
    shutil.rmtree(os.path.join(cwd, "images\\" + username + "\\json"))
        
if __name__ == "__main__":
    imgPath = sys.argv[1]
    username = sys.argv[2]
    main(imgPath, username)
