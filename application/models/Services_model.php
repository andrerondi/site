<?php

class Services_model extends CI_Model
{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	public function get_data($id, $select = NULL)
	{
		if (!empty($select))
		{
			$this->db->select($select);
		}
		$this->db->from("services");
		$this->db->where("service_id", $id);
		return $this->db->get();
	}

	public function insert($data)
	{
		$this->db->insert("services", $data);
	}

	public function update($id, $data)
	{
		$this->db->where("service_id", $id);
		$this->db->update("services", $data);
	}

	public function delete($id, $select = NULL)
	{
		$this->db->where("service_id", $id);
		$this->db->from("services");
	}

	public function is_duplicated($field, $value, $id = NULL)
	{
		if (!empty($id))
		{
			$this->db->where("service_id <>", $id);
		}
		$this->db->from("services");
		$this->db->where($field, $value);
		return $this->db->get()->num_rows() > 0;
	}
}