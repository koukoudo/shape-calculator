<?php

namespace App\Controller;

use App\Entity\CircleSize;
use App\Form\Type\CircleSizeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class CircleController extends AbstractController
{
    /**
     * @Route("/circle", name="circle")
     */
    public function index(Request $request): Response
    {

        $size = new CircleSize();

        $form = $this->createForm(CircleSizeType::class, $size);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $size = $form->getData();
            $radius = $size->getRadius();

            return $this->redirectToRoute('result', array('shape' => 'circle', 'radius' => $radius));
        }

        return $this->render('calculator.html.twig', [
            'form' => $form->createView(),
            'shape' => 'circle',
            'subtitle' => 'Calculate the diameter of a circle.',
        ]);
    }
}
